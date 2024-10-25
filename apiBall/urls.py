from django.urls import path
from .views import startCode, BallListView

urlpatterns = [
    path('start-code/<int:matchId>/',startCode,name='start-code'),
    path('balls/',BallListView.as_view(),name='ball-list'),
]