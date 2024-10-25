from django.urls import path
from .views import PlayerListView,PlayerDetailView, AllPlayersListView

urlpatterns = [
    path('players/',PlayerListView.as_view(),name="player_list"),
    path('players/<int:pk>/',PlayerDetailView.as_view(),name="player_detail"),
    path('allplayers/',AllPlayersListView.as_view(),name="all_player_list")
]