# stadium/urls.py
from django.urls import path
from .views import StadiumListView, StadiumDetailView, NationalityListView, AllStadiumsListView

urlpatterns = [
    path('stadiums/', StadiumListView.as_view(), name='stadium-list'),
    path('stadiums/all/',AllStadiumsListView.as_view(),name='stadiums-all'),
    path('stadiums/<int:pk>/', StadiumDetailView.as_view(), name='stadium-detail'),
    path('nationalities/', NationalityListView.as_view(), name='nationality-list'),
]
