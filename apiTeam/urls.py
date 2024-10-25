from django.urls import path
from .views import TeamListView, TeamDetailView, AllTeamsListView

urlpatterns = [
    path('teams/',TeamListView.as_view(),name="team-list"),
    path('teams/<int:pk>/',TeamDetailView.as_view(),name="team-details"),
    path('allteams/',AllTeamsListView.as_view(),name="teams-list-all"),
]