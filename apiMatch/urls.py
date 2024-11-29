from django.urls import path
from .views import MatchListView,MatchDetailView, MatchTeamDetailView, PlayingSquadListView, UltimateMatchDetailsView, PlayingSquadDetailView, UpdateCurrentInningsView, UploadVideosAPIView

urlpatterns = [
    path('matches/',MatchListView.as_view(),name='matches-list'),
    path('matches/<int:pk>/',MatchDetailView.as_view(),name='match-details'),
    path('match-teams/<int:pk>/',MatchTeamDetailView.as_view(),name='match-team'),
    path('matches/<int:match_id>/team/<int:team_id>/',PlayingSquadListView.as_view(),name='match-team-squad'),
    path('squad/<int:match_id>/team/<int:team_id>/',PlayingSquadDetailView.as_view(),name='playing_squad_details'),
    path('ultimate-match/<int:pk>/',UltimateMatchDetailsView.as_view(),name='ultimate_match'),
    path('update-innings/<int:match_id>/current-innings/',UpdateCurrentInningsView.as_view(),name='update-innings'),
    path("upload-videos/", UploadVideosAPIView.as_view(), name="upload_videos"),
]