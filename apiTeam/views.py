from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from .models import Team
from .serializers import TeamSerializer
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q

class TeamListView(generics.ListCreateAPIView):
    serializer_class = TeamSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination

    def get_queryset(self):
        queryset = Team.objects.filter(user=self.request.user).order_by('-id')
        search_query = self.request.query_params.get('search',None)
        if search_query:
            queryset = queryset.filter(
                Q(name_icontains=search_query) |
                Q(shortName_icontains=search_query)
            )
        return queryset
    
    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)
    
class AllTeamsListView(generics.ListAPIView):
    serializer_class = TeamSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        queryset = Team.objects.filter(user=self.request.user)
        search_text = self.request.query_params.get('search',None)
        if search_text:
            queryset = queryset.filter(
                Q(name__icontains=search_text) |
                Q(shortName__icontains=search_text)
            )
        return queryset
    
class TeamDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TeamSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Team.objects.filter(user=self.request.user)
    
    def perform_update(self, serializer):
        stadium = self.get_object()
        if stadium.user != self.request.user:
            raise PermissionDenied("You Don't have permission to update this team data")
        serializer.save()

    def perform_destroy(self, instance):
        if instance.user != self.request.user:
            raise PermissionDenied("You don't have permission to delete this tema data")
        return super().perform_destroy(instance)