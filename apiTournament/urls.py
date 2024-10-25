from django.urls import path
from .views import TournamentListView,TournamentDetailView,TournamentAllView

urlpatterns = [
    path('tournaments/',TournamentListView.as_view(),name="tournament_list"),
    path('all-tournaments/',TournamentAllView.as_view(),name="all-tournaments"),
    path('tournaments/<int:pk>/',TournamentDetailView.as_view(),name="tournament_details"),
]