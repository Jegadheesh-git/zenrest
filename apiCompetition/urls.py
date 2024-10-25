from django.urls import path
from .views import CompetitionListView, CompetitionDetailView, MatchTypeListView, CompetitionTeamView, AllCompetitionsListView, KnockOutListView
from .views_squad import *

urlpatterns = [
    path('matchtypes/',MatchTypeListView.as_view(),name='matchtype_list'),
    path('knockouts/',KnockOutListView.as_view(),name='knockouts_list'),

    path('competitions/',CompetitionListView.as_view(),name='competition_list'),
    path('competitions/<int:pk>/',CompetitionDetailView.as_view(),name='competition_details'),

    path('competitions/all/',AllCompetitionsListView.as_view(),name='competitions_all'),

    path('competitions/teams/<int:pk>/',CompetitionTeamView.as_view(),name='competion_teams'),

    path('competitions/<int:competition_id>/teams/<int:team_id>/squad/', 
         CompetitionTeamSquadListView.as_view(), name="competition_team_squad_list"),
    
    path('competitions/<int:competition_id>/teams/<int:team_id>/squad/add/', 
         CompetitionTeamSquadCreateView.as_view(), name="competition_team_squad_add"),
    
    path('competitions/<int:competition_id>/teams/<int:team_id>/squad/<int:pk>/', 
         CompetitionTeamSquadDetailView.as_view(), name="competition_team_squad_detail"),
]