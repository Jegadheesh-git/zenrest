from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from .serializers import MatchTypeSerializer, CompetitionSerializer, CompetitionTeamSerializer, KnockOutSerializer
from .models import MatchType, Competition, CompetitionTeamSquad, KnockOut
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q
from apiTeam.models import Team

class MatchTypeListView(generics.ListAPIView):
    permission_classes = []
    pagination_class = None
    serializer_class = MatchTypeSerializer
    queryset = MatchType.objects.all()

class KnockOutListView(generics.ListAPIView):
    permission_classes = []
    pagination_class = None
    serializer_class  = KnockOutSerializer
    queryset = KnockOut.objects.all()

class AllCompetitionsListView(generics.ListAPIView):
    permission_classes = []
    pagination_class = None
    serializer_class = CompetitionSerializer
    
    def get_queryset(self):
        return Competition.objects.filter(user=self.request.user)

class CompetitionListView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination
    serializer_class = CompetitionSerializer

    def get_queryset(self):
        queryset = Competition.objects.filter(user=self.request.user).order_by('-id')
        search_text = self.request.query_params.get('search',None)
        if search_text:
            queryset = queryset.filter(
                Q(name__icontains=search_text) |
                Q(displayName__icontains=search_text) |
                Q(year__icontains=search_text) |
                Q(tournament__name__icontains=search_text)
            )
        return queryset
    
    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)
    
class CompetitionDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CompetitionSerializer

    def get_queryset(self):
        return Competition.objects.filter(user=self.request.user)

    def update_teams(self, competition, new_team_ids):
        teams = Team.objects.filter(id__in=new_team_ids, user=self.request.user)

        if len(teams) != len(new_team_ids):
            raise PermissionDenied("Some teams do not belong to you or do not exist.")

        # Update the teams in the competition
        competition.teams.set(teams)  # Use set() to replace the old teams
        competition.hasUpdatedTeams = True
        competition.save()


    def perform_update(self, serializer):
        competition = self.get_object()

        # Ensure the competition belongs to the user
        if competition.user != self.request.user:
            raise PermissionDenied("You don't have permission to edit this competition.")

        # Validate tournament ownership
        tournament = serializer.validated_data.get('tournament', competition.tournament)
        if tournament.user != self.request.user:
            raise PermissionDenied("You do not have permission to use this tournament.")

        # Get the team IDs from the request and update teams if provided
        new_team_ids = self.request.data.get('teams', [])
        if new_team_ids:
            self.update_teams(competition, new_team_ids)  # Call the custom method to update teams

        # Perform the rest of the update (non-team fields)
        serializer.save()


    def perform_destroy(self, instance):
        # Ensure the competition belongs to the user
        if instance.user != self.request.user:
            raise PermissionDenied("You don't have permission to delete this competition.")
        instance.delete()

class CompetitionTeamView(generics.RetrieveAPIView):
    serializer_class = CompetitionTeamSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        return Competition.objects.filter(user=self.request.user)