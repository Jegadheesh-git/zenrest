from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from .models import Player
from .serializers import PlayerSerializer
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q

class PlayerListView(generics.ListCreateAPIView):
    serializer_class = PlayerSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination

    def get_queryset(self):
        queryset = Player.objects.filter(user=self.request.user).order_by('-id')
        search_text = self.request.query_params.get('search',None)
        if search_text:
            queryset = queryset.filter(
                Q(firstName__icontains=search_text) |
                Q(middleName_icontains=search_text) |
                Q(lastName_icontains=search_text) |
                Q(nickName__icontains=search_text)
            )
        return queryset
    
    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)
    
class AllPlayersListView(generics.ListAPIView):
    serializer_class = PlayerSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        queryset = Player.objects.filter(user=self.request.user)
        search_text = self.request.query_params.get('search',None)
        if search_text:
            queryset = queryset.filter(
                Q(firstName__icontains=search_text) |
                Q(middleName__icontains=search_text) |
                Q(lastName__icontains=search_text) |
                Q(nickName__icontains=search_text)
            )
        return queryset
    
class PlayerDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PlayerSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Player.objects.filter(user=self.request.user)

    def perform_update(self, serializer):
        player = self.get_object()
        if player.user != self.request.user:
            raise PermissionDenied("You don't have access to edit this Player data")
        return serializer.save()
    
    def perform_destroy(self, instance):
        if instance.user != self.request.user:
            raise PermissionDenied("You don't have access to delete this player")
        return super().perform_destroy(instance)