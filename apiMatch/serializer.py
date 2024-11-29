from rest_framework import serializers
from .models import Match, PlayingSquad
from apiTeam.serializers import TeamSerializer
from apiCompetition.serializers  import MatchTypeSerializer
from apiPlayer.serializers import PlayerSerializer
from django.db.models import Q, Sum, Count
from apiBall.models import Ball

class MatchSerializer(serializers.ModelSerializer):
    displayName = serializers.SerializerMethodField()

    class Meta:
        model = Match
        exclude = ['user']  # Exclude user, since it is set automatically in the view

    def get_displayName(self, obj):
        return f"{obj.team1.name} vs {obj.team2.name} on {obj.date} - ({obj.competition.displayName})"

    def update(self, instance, validated_data):
        """
        This method allows the serializer to handle the custom save logic directly, so we ensure
        the innings teams are updated properly within the serializer as well.
        """
        # Custom logic for updating innings teams can go here, or delegate to the view.
        return super().update(instance, validated_data)


class MatchTeamSerializer(serializers.ModelSerializer):

    team1 = TeamSerializer()
    team2 = TeamSerializer()
    class Meta:
        model = Match
        exclude = ['user']

class UltimateMatchSerializer(serializers.ModelSerializer):
    matchType = MatchTypeSerializer()
    team1 = TeamSerializer()
    team2 = TeamSerializer()
    firstInningsBattingTeam = TeamSerializer()
    firstInningsBowlingTeam = TeamSerializer()
    secondInningsBattingTeam = TeamSerializer()
    secondInningsBowlingTeam = TeamSerializer()
    thirdInningsBattingTeam = TeamSerializer()
    thirdInningsBowlingTeam = TeamSerializer()
    fourthInningsBattingTeam = TeamSerializer()
    fourthInningsBowlingTeam = TeamSerializer()
    team_stats = serializers.SerializerMethodField()  # Field for team stats
    player_data = serializers.SerializerMethodField()  # Field for player data

    class Meta:
        model = Match
        exclude = ['user']

    # Method to get team stats
    def get_team_stats(self, obj):
        current_innings = obj.currentInnings

        # Calculate team stats based on the current innings
        team_stats = Ball.objects.filter(match=obj, innings=current_innings).aggregate(
            total_runs=Sum('teamRuns'),
            balls_bowled=Count('id'),
            wickets_taken=Count('dismissedPlayer', filter=Q(dismissedPlayer__isnull=False)),
            wides=Count('wideRuns', filter=Q(wideRuns__gt=0)),
            noBalls=Count('noBallRuns', filter=Q(noBallRuns__gt=0))
        )

        team_runs = team_stats['total_runs'] or 0
        team_wickets = team_stats['wickets_taken']
        team_balls = team_stats['balls_bowled']
        team_wide_runs = team_stats['wides']
        team_no_balls = team_stats['noBalls']
        team_balls = team_balls - (team_wide_runs + team_no_balls)

        team_overs = team_balls // 6 + (team_balls % 6) / 10
        run_rate = (team_runs / team_overs) if team_overs > 0 else 0

        return {
            'total_runs': team_runs,
            'wickets_taken': team_wickets,
            'overs_bowled': round(team_overs, 1),
            'run_rate': round(run_rate, 2),
        }

    # Method to get player data
    def get_player_data(self, obj):
        # Get the last ball data for the current innings
        current_innings = obj.currentInnings
        last_ball = Ball.objects.filter(match=obj, innings=current_innings).order_by('-id').first()

        if last_ball:
            team_stats = Ball.objects.filter(match=obj, innings=current_innings).aggregate(
                balls_bowled=Count('id'),
                wides=Count('wideRuns', filter=Q(wideRuns__gt = 0)),
                noBalls=Count('noBallRuns', filter=Q(noBallRuns__gt=0))
            )

            team_balls = team_stats['balls_bowled']
            team_wide_runs = team_stats['wides']
            team_no_balls = team_stats['noBalls']
            team_balls = team_balls - (team_wide_runs + team_no_balls)

            team_overs = team_balls // 6 + (team_balls % 6) / 10

            remaining_balls = (round(team_overs, 1) * 10) % 10
            striker_runs = int(last_ball.strikerRuns) if last_ball else None
            leg_bye_runs = int(last_ball.legByeRuns) if last_ball else None
            bye_runs = int(last_ball.byeRuns) if last_ball else None
            dismissed_player = last_ball.dismissedPlayer if last_ball else None
            wide_runs = last_ball.wideRuns if last_ball else None
            no_ball_runs = last_ball.noBallRuns if last_ball  else None

            striker = last_ball.striker if last_ball else None
            non_striker = last_ball.nonStriker if last_ball else None
            bowler = last_ball.bowler if last_ball else None
            ballNumber = last_ball.ballNumber if last_ball else 0

            # Logic to switch striker and non-striker based on runs
            if (striker_runs % 2 != 0 or bye_runs % 2 != 0 or leg_bye_runs % 2 != 0) and remaining_balls != 5:
                non_striker, striker = striker, non_striker

            if dismissed_player == striker:
                striker = None
            if dismissed_player == non_striker:
                non_striker = None

            print(remaining_balls, no_ball_runs, wide_runs)
            
            if(remaining_balls == 0 and no_ball_runs == 0 and wide_runs == 0):
                bowler = ''
            else:
                bowler = bowler

            

            # Returning player data
            return {
                'striker': striker.id if striker else None,
                'non_striker': non_striker.id if non_striker else None,
                'bowler': bowler.id if bowler else None,
                'ballNumber': ballNumber if ballNumber else 0,
            }
        return {}


class PlayingSquadSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayingSquad
        exclude = ['user']

class PlayingSquadDetailSerializer(serializers.ModelSerializer):
    players = serializers.SerializerMethodField()  # Modify to include statistics for each player

    class Meta:
        model = PlayingSquad
        exclude = ['user']

    def get_players(self, obj):
        # Assuming the view sends 'players_stats' for each squad containing player statistics
        # 'players_stats' should include the player data and their corresponding stats
        players_stats = self.context.get('players_stats', [])
        
        # Match each player with the stats calculated in the view
        player_stats_list = []
        for player in obj.players.all():
            player_stats = next((stat for stat in players_stats if stat['player'] == player), None)
            if player_stats:
                player_data = {
                    'player': PlayerSerializer(player).data,  # Serialize player data
                    'runs_scored': player_stats.get('runs_scored', 0),
                    'balls_faced': player_stats.get('balls_faced', 0),
                    'strike_rate': round(player_stats.get('strike_rate', 0.0), 2),
                    'fours': player_stats.get('fours', 0),  # Include fours stats
                    'sixes': player_stats.get('sixes', 0),  # Include sixes stats
                    'runs_conceded': player_stats.get('runs_conceded', 0),
                    'overs_bowled': round(player_stats.get('overs_bowled', 0.0), 1),
                    'wickets_taken': player_stats.get('wickets_taken', 0),
                    'economy': round(player_stats.get('economy', 0.0), 2),
                    'has_dismissed': player_stats.get('has_dismissed',0)
                }
                player_stats_list.append(player_data)

        return player_stats_list


