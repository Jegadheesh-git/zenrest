from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from .models import Tournament
from .serializers import TournamentSerializer
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q

class TournamentListView(generics.ListCreateAPIView):
    serializer_class = TournamentSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination

    def get_queryset(self):
        queryset = Tournament.objects.filter(user=self.request.user).order_by('-id')
        search_text = self.request.query_params.get('search',None)

        if search_text:
            queryset = queryset.filter(
                Q(name__icontains=search_text)
            )
        return queryset
    
    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)
    
class TournamentAllView(generics.ListAPIView):
    serializer_class = TournamentSerializer
    permission_classes = []
    pagination_class = None
    
    def get_queryset(self):
        return Tournament.objects.filter(user=self.request.user)
    
class TournamentDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TournamentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Tournament.objects.filter(user=self.request.user)
    
    def perform_update(self, serializer):
        tournament = self.get_object()

        if tournament.user != self.request.user:
            raise PermissionDenied("You dont have access to update this tournament data")
        
        return serializer.save()
    
    def perform_destroy(self, instance):
        if instance.user != self.request.user:
            raise PermissionDenied("you dont have access to delete this tournament")
        return super().perform_destroy(instance)
