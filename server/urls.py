from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/user/',include('apiUser.urls')),
    path('api/stadium/',include('apiStadium.urls')),
    path('api/umpire/',include('apiUmpire.urls')),
    path('api/team/',include('apiTeam.urls')),
    path('api/tournament/',include('apiTournament.urls')),
    path('api/player/',include('apiPlayer.urls')),
    path('api/competition/',include('apiCompetition.urls')),
    path('api/match/',include('apiMatch.urls')),
    path('api/ball/',include('apiBall.urls')),
    path('api/plans/',include('apiSubscription.urls')),
    path('',include('home.urls')),
]
