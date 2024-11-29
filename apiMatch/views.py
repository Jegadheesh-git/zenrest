from .models import Match, PlayingSquad
from .serializer import MatchSerializer, MatchTeamSerializer, PlayingSquadSerializer, UltimateMatchSerializer, PlayingSquadDetailSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied, ValidationError
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q, Sum, Count
from rest_framework import status
from rest_framework.response import Response
from apiBall.models import Ball
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.parsers import MultiPartParser
import os

VIDEO_UPLOAD_DIR = "media/videos/"

class MatchListView(generics.ListCreateAPIView):
    serializer_class = MatchSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination

    def get_queryset(self):
        queryset = Match.objects.filter(user=self.request.user).order_by('-id')
        search_text = self.request.query_params.get('search',None)
        if search_text:
            queryset = queryset.filter(
               Q(team1__name__icontains=search_text) |
               Q(team2__name__icontains=search_text) |
               Q(team1__shortName__icontains=search_text) | 
               Q(team2__shortName__icontains=search_text) | 
               Q(competition__name__icontains=search_text) | 
               Q(competition__displayName__icontains=search_text) |
               Q(date__icontains=search_text) 
            )
        return queryset
    
    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)
    
class MatchDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MatchSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        return Match.objects.filter(user=self.request.user)

    def perform_update(self, serializer):
        # Get the current match instance
        match_data = self.get_object()
        
        # Check if the user has permission to update the match
        if match_data.user != self.request.user:
            raise PermissionDenied('You don’t have access to alter this match')

        validated_data = serializer.validated_data

        # Logic for determining first and second innings batting teams based on toss
        tossWonBy = validated_data.get('tossWonBy')
        optTo = validated_data.get('optTo')

        if tossWonBy and optTo:
            teamWonTheToss = tossWonBy
            teamLostTheToss = match_data.team2 if tossWonBy == match_data.team1 else match_data.team1

            if optTo == 'batting':
                firstInningsBattingTeam = teamWonTheToss
                firstInningsBowlingTeam = teamLostTheToss
                secondInningsBattingTeam = teamLostTheToss
                secondInningsBowlingTeam = teamWonTheToss
            else:
                firstInningsBattingTeam = teamLostTheToss
                firstInningsBowlingTeam = teamWonTheToss
                secondInningsBattingTeam = teamWonTheToss
                secondInningsBowlingTeam = teamLostTheToss

            # Set these values in the serializer's validated data before saving
            validated_data['firstInningsBattingTeam'] = firstInningsBattingTeam
            validated_data['firstInningsBowlingTeam'] = firstInningsBowlingTeam
            validated_data['secondInningsBattingTeam'] = secondInningsBattingTeam
            validated_data['secondInningsBowlingTeam'] = secondInningsBowlingTeam

        try:
            # Save validated data via the serializer
            serializer.save()
        except Exception as e:
            raise ValidationError(f"Error updating match: {str(e)}")

    def perform_destroy(self, instance):
        # Check if the user has permission to delete the match
        if instance.user != self.request.user:
            raise PermissionDenied('You don’t have permission to delete this match')
        return super().perform_destroy(instance)
    
class UpdateCurrentInningsView(generics.UpdateAPIView):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer

    def get_object(self):
        # Fetch the Match object based on the match_id passed in the URL
        match_id = self.kwargs.get('match_id')
        return self.queryset.get(id=match_id)
    
    def patch(self, request, *args, **kwargs):
        # We will use partial updates since only currentInnings is being updated
        return self.partial_update(request, *args, **kwargs)
    
class MatchTeamDetailView(generics.RetrieveAPIView):
    serializer_class = MatchTeamSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        return Match.objects.filter(user=self.request.user)
    
class PlayingSquadListView(generics.ListCreateAPIView):
    serializer_class = PlayingSquadSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        matchId = self.kwargs['match_id']
        teamId = self.kwargs['team_id']
        return PlayingSquad.objects.filter(
            match = matchId,
            team = teamId,
            user=self.request.user)
    
    def perform_create(self, serializer):
        # Get match and team from the serializer's validated data
        match = serializer.validated_data.get('match')
        team = serializer.validated_data.get('team')

        # Delete any existing PlayingSquad for the same match and team
        deleted_count = PlayingSquad.objects.filter(match=match, team=team, user=self.request.user).delete()
        print(f"Deleted {deleted_count} existing PlayingSquad entries for match {match.id} and team {team.id}")

        # Create the new PlayingSquad entry
        playing_squad = serializer.save(user=self.request.user)

        # Calculate the number of squads for the match
        playing_squad_count = PlayingSquad.objects.filter(match=match).count()
        match.playingSquadCount = playing_squad_count

        # Save the updated match
        match.save()

        # Debugging prints
        print(f"Updated playingSquadCount to {playing_squad_count} for match {match.id}")

        return playing_squad
    
class PlayingSquadDetailView(generics.ListAPIView):
    serializer_class = PlayingSquadDetailSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        matchId = self.kwargs['match_id']
        teamId = self.kwargs['team_id']
        return PlayingSquad.objects.filter(
            match=matchId,
            team=teamId,
            user=self.request.user
        )
    def list(self, request, *args, **kwargs):
        matchId = self.kwargs['match_id']
        match = Match.objects.get(pk=matchId)
        current_innings = match.currentInnings

        # Get the playing squad
        playing_squad = self.get_queryset()

        # Calculate player stats
        players_stats = []
        for squad in playing_squad:
            for player in squad.players.all():
                # Batting stats
                batting_stats = Ball.objects.filter(match=match, innings=current_innings, striker=player).aggregate(
                    runs_scored=Sum('strikerRuns'),
                    balls_faced=Count('id'),
                    fours=Count('id', filter=Q(strikerRuns=4, isBoundary=True)),
                    sixes=Count('id', filter=Q(strikerRuns=6, isBoundary=True))
                )
                dismissal_stats = Ball.objects.filter(match=match, innings=current_innings, dismissedPlayer=player).aggregate(
                    has_dismissed = Count('id', filter=Q(dismissedPlayer__isnull=False)),
                )
                runs_scored = batting_stats['runs_scored'] or 0
                balls_faced = batting_stats['balls_faced']
                strike_rate = (runs_scored / balls_faced) * 100 if balls_faced > 0 else 0
                fours = batting_stats['fours'] or 0
                sixes = batting_stats['sixes'] or 0
                has_dismissed = dismissal_stats['has_dismissed'] or 0

                # Bowling stats
                bowling_stats = Ball.objects.filter(match=match, innings=current_innings, bowler=player).aggregate(
                    runs_conceded=Sum('bowlerRuns'),
                    balls_bowled=Count('id'),
                    wickets_taken=Count('wicketType', filter=Q(wicketType__isnull=False)),
                    wides = Count('id', filter=Q(wideRuns__gt = 0)),
                    noBalls = Count('id', filter=Q(noBallRuns__gt = 0)),
                )
                runs_conceded = bowling_stats['runs_conceded'] or 0
                balls_bowled = bowling_stats['balls_bowled'] - (bowling_stats['wides'] + bowling_stats['noBalls'])
                overs_bowled = balls_bowled // 6 + (balls_bowled % 6) / 10  # Convert balls to overs
                wickets_taken = bowling_stats['wickets_taken']
                economy = (runs_conceded / overs_bowled) if overs_bowled > 0 else 0

                # Add player stats to the list
                players_stats.append({
                    'player': player,  # or any unique identifier
                    'runs_scored': runs_scored,
                    'balls_faced': balls_faced,
                    'strike_rate': round(strike_rate, 2),
                    'fours': fours,
                    'sixes': sixes,
                    'runs_conceded': runs_conceded,
                    'overs_bowled': round(overs_bowled, 1),
                    'wickets_taken': wickets_taken,
                    'economy': round(economy, 2),
                    'has_dismissed': has_dismissed
                })
        
        # Pass the calculated stats to the serializer context
        serializer = self.get_serializer(playing_squad, many=True, context={'players_stats': players_stats})
        return Response(serializer.data)


class UltimateMatchDetailsView(generics.RetrieveAPIView):
    serializer_class = UltimateMatchSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        return Match.objects.filter(user=self.request.user)

    def retrieve(self, request, *args, **kwargs):
        # Get the match object
        match = self.get_object()

        # Get the team stats for the current innings
        current_innings = match.currentInnings
        team_stats = Ball.objects.filter(match=match, innings=current_innings).aggregate(
            total_runs=Sum('teamRuns'),
            balls_bowled=Count('id'),
            wickets_taken=Count('dismissedPlayer', filter=Q(dismissedPlayer__isnull=False)),
            wides=Count('wideRuns', filter=Q(wideRuns__gt = 0)),
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

        # Prepare the team stats to pass to the serializer context
        team_stats_data = {
            'total_runs': team_runs,
            'wickets_taken': team_wickets,
            'overs_bowled': round(team_overs, 1),
            'run_rate': round(run_rate, 2)
        }

        #Last Ball data
        last_ball = Ball.objects.filter(match=match, innings=current_innings).order_by('-id').first()

        last_ball_data = {
            'strikerRuns': int(last_ball.strikerRuns) if last_ball else None,
            'legByeRuns': int(last_ball.legByeRuns) if last_ball else None,
            'byeRuns': int(last_ball.byeRuns) if last_ball else None,

            'dismissedPlayer': last_ball.dismissedPlayer is not None if last_ball else None,
            'wideRuns': last_ball.wideRuns if last_ball and last_ball.wideRuns > 0 else None,
            'noBallRuns': last_ball.noBallRuns if last_ball and last_ball.noBallRuns > 0 else None,
            'striker': last_ball.striker if last_ball else None,
            'nonStriker': last_ball.nonStriker if last_ball else None,
            'bowler': last_ball.bowler if last_ball else None,
            'ballNumber': last_ball.ballNumber if last_ball else None,
        }

        remainingBalls = (round(team_overs, 1) * 10) % 10
        striker = ''
        nonStriker = ''
        bowler = ''
        ballnumber = 0

        if(last_ball):
            if(((last_ball_data['strikerRuns'] %2 != 0 or last_ball_data['byeRuns'] %2 != 0 or last_ball_data['legByeRuns'] %2 != 0 ) and (remainingBalls != 5)) or ((last_ball_data['strikerRuns'] %2 != 0 or last_ball_data['byeRuns'] %2 != 0 or last_ball_data['legByeRuns'] %2 != 0 ) and last_ball_data['wideRuns'] == 0 and last_ball_data['noBallRuns'] == 0 and remainingBalls == 5)):
                nonStriker = last_ball_data['striker']
                striker = last_ball_data['nonStriker']
            else:
                striker = last_ball_data['striker']
                nonStriker = last_ball_data['nonStriker']

            if(remainingBalls == 0 and last_ball_data['noBallRuns'] == 0 and last_ball_data['wideRuns'] == 0):
                bowler = ''
            else:
                bowler = last_ball_data['bowler']
            
            if(last_ball_data['dismissedPlayer'] == striker):
                striker = ''
            
            if(last_ball_data['dismissedPlayer'] == nonStriker):
                nonStriker = ''
            
            ballnumber = last_ball_data['ballNumber']
        
        player_data = {
            'striker': striker,
            'nonStriker': nonStriker,
            'bowler': bowler,
            'ballNumber': ballnumber
        }

        # Pass the stats to the serializer context
        serializer = self.get_serializer(match, context={'team_stats': team_stats_data,'player_data':player_data})
        return Response(serializer.data)

from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404

class UploadVideosAPIView(APIView):
    permission_classes = [IsAuthenticated]  # Ensure only authenticated users can access

    parser_classes = [MultiPartParser]  # To handle file uploads

    def post(self, request, *args, **kwargs):
        match_id = request.query_params.get("matchId")
        if not match_id:
            return Response({"error": "Match ID is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Check if the match exists and belongs to the authenticated user
        match = get_object_or_404(Match, pk=match_id)
        if match.user != request.user:
            return Response({"error": "You are not authorized to upload videos for this match."}, status=status.HTTP_403_FORBIDDEN)

        if not os.path.exists(VIDEO_UPLOAD_DIR):
            os.makedirs(VIDEO_UPLOAD_DIR)

        uploaded_files = request.FILES.getlist("videos")  # 'videos' is the key in the formData
        
        saved_files = []

        for file in uploaded_files:
            # Validate file size (e.g., max 500 MB)
            if file.size > 500 * 1024 * 1024:  # 500 MB
                return Response(
                    {"error": f"File {file.name} exceeds the maximum allowed size of 500 MB."},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            # Save file with match_id prefix
            file_name = f"{match_id}_{file.name}"
            file_path = os.path.join(VIDEO_UPLOAD_DIR, file_name)

            with open(file_path, "wb+") as destination:
                for chunk in file.chunks():
                    destination.write(chunk)

            saved_files.append(file_name)
            
        # Update `hasMatchVideosUploadCompleted` to True after a successful upload
        match.hasMatchVideosUploadCompleted = True
        match.save()

        return Response(
            {"message": "Videos uploaded successfully", "files": saved_files},
            status=status.HTTP_201_CREATED,
        )
