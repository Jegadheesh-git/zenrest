from .serializers import BallSerializer
from .models import Ball
from apiMatch.models import Match, PlayingSquad
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from rest_framework.pagination import PageNumberPagination
from django.http import JsonResponse
from django.db.models import Sum, Count, Q

class BallListView(generics.ListCreateAPIView):
    serializer_class = BallSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination

    def get_queryset(self):
        return Ball.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

class BallDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BallSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        return Ball.objects.filter(user=self.request.user)
    
    def perform_update(self, serializer):
        ball = self.get_object()
        if ball.user != self.request.user:
            raise PermissionDenied("You don't have permission to update this Ball")
        return serializer.save()
    
    def perform_destroy(self, instance):
        if instance.user != self.request.user:
            raise PermissionDenied("You don't have access to delete this Ball")
        return super().perform_destroy(instance)
    
from django.db.models import Sum, Count

def startCode(request, matchId):
    try:
        match = Match.objects.get(pk=matchId)
        if match.user != request.user:
            return JsonResponse({'error':'Restricted Access!'})

        # Get current innings
        current_innings = match.currentInnings

        # Get the playing squad
        playingSquad = PlayingSquad.objects.filter(match=match)

        # Initialize a dictionary to store player stats
        players_stats = []

        # For each player in the playing squad
        for squad in playingSquad:
            squad_players = squad.players.all()

            for player in squad_players:
                # Get runs scored, balls faced, and strike rate for the batsman (player as striker)
                batting_stats = Ball.objects.filter(match=match, innings=current_innings, striker=player).aggregate(
                    runs_scored=Sum('strikerRuns'),
                    balls_faced=Count('id')  # each ball is a row, so count them
                )
                runs_scored = batting_stats['runs_scored'] or 0
                balls_faced = batting_stats['balls_faced']
                strike_rate = (runs_scored / balls_faced) * 100 if balls_faced > 0 else 0

                # Get runs conceded, overs bowled, and wickets taken for the bowler (player as bowler)
                bowling_stats = Ball.objects.filter(match=match, innings=current_innings, bowler=player).aggregate(
                    runs_conceded=Sum('bowlerRuns'),
                    balls_bowled=Count('id'),
                    wickets_taken=Count('wicketType', filter=Q(wicketType__isnull=False))
                )
                runs_conceded = bowling_stats['runs_conceded'] or 0
                balls_bowled = bowling_stats['balls_bowled']
                overs_bowled = balls_bowled // 6 + (balls_bowled % 6) / 10  # converting balls to overs
                wickets_taken = bowling_stats['wickets_taken']
                economy = (runs_conceded / overs_bowled) if overs_bowled > 0 else 0

                # Append player stats to the list
                players_stats.append({
                    'player': player,
                    'runs_scored': runs_scored,
                    'balls_faced': balls_faced,
                    'strike_rate': round(strike_rate, 2),
                    'runs_conceded': runs_conceded,
                    'overs_bowled': round(overs_bowled, 1),
                    'wickets_taken': wickets_taken,
                    'economy': round(economy, 2)
                })
        print(players_stats)
        return JsonResponse({'playingSquad': players_stats})

    except Exception as e:
        print(e)
    return JsonResponse({'message':'Error fetching data'})

