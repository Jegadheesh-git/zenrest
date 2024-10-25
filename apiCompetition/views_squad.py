from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from .models import CompetitionTeamSquad, Competition, Team
from apiPlayer.models import Player
from .serializers import CompetitionTeamSquadSerializer

class CompetitionTeamSquadListView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CompetitionTeamSquadSerializer
    pagination_class = None

    def get_queryset(self):
        competition_id = self.kwargs['competition_id']
        team_id = self.kwargs['team_id']
        user = self.request.user
        
        return CompetitionTeamSquad.objects.filter(
            competition__id=competition_id,
            team__id=team_id,
            user=user
        )

class CompetitionTeamSquadCreateView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CompetitionTeamSquadSerializer
    pagination_class = None

    def create(self, request, competition_id, team_id):
        user = request.user
        competition = Competition.objects.get(id=competition_id, user=user)
        team = Team.objects.get(id=team_id, user=user)

        players = Player.objects.filter(id__in=request.data['player_ids'], user=user)

        if len(players) != len(request.data['player_ids']):
            return Response({"error": "Some players do not belong to you or do not exist."}, status=status.HTTP_400_BAD_REQUEST)

        squad, created = CompetitionTeamSquad.objects.get_or_create(
            competition=competition, team=team, user=user
        )

        squad.players.set(players)  # Assign players to the squad
        squad.save()

        return Response(CompetitionTeamSquadSerializer(squad).data, status=status.HTTP_201_CREATED)

class CompetitionTeamSquadDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CompetitionTeamSquadSerializer
    pagination_class = None

    def get_queryset(self):
        user = self.request.user
        return CompetitionTeamSquad.objects.filter(user=user)

    def update(self, request, competition_id, team_id):
        squad = self.get_object()  # This fetches the squad based on the ID in the URL
        players = Player.objects.filter(id__in=request.data['player_ids'], user=request.user)

        if len(players) != len(request.data['player_ids']):
            return Response({"error": "Some players do not belong to you or do not exist."}, status=status.HTTP_400_BAD_REQUEST)

        squad.players.set(players)  # Update the squad with the new players
        squad.save()

        return Response(CompetitionTeamSquadSerializer(squad).data, status=status.HTTP_200_OK)

    def perform_destroy(self, instance):
        if instance.user != self.request.user:
            raise PermissionDenied("You don't have access to delete this squad.")
        instance.delete()
