from django.urls import path
from .views import UmpireListView, UmpireDetailView, AllUmpiresListView

urlpatterns = [
    path('umpires/',UmpireListView.as_view(),name='umpire-list'),
    path('umpires/all/',AllUmpiresListView.as_view(),name='umpires-all'),
    path('umpires/<int:pk>/',UmpireDetailView.as_view(),name='umpire-detail'),
]