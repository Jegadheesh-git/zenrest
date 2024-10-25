from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from .models import Umpire
from .serializers import UmpireSerializer
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q

class AllUmpiresListView(generics.ListAPIView):
    serializer_class = UmpireSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        return Umpire.objects.filter(user=self.request.user)

class UmpireListView(generics.ListCreateAPIView):
    serializer_class = UmpireSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination

    def get_queryset(self):
        queryset = Umpire.objects.filter(user=self.request.user).order_by('-id')
        search_query = self.request.query_params.get('search', None)
        if search_query:
            queryset = queryset.filter(
                Q(name__icontains=search_query) | 
                Q(nationality__name__icontains=search_query)  # Search in related Nationality's name
            )
        
        return queryset
    
    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

class UmpireDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UmpireSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Umpire.objects.filter(user=self.request.user)
    
    def perform_update(self, serializer):
        stadium = self.get_object()
        if stadium.user != self.request.user:
            raise PermissionDenied("You don't have permission to update this Umpire data")
        serializer.save()

    def  perform_destroy(self, instance):
        if instance.user != self.request.user:
            raise PermissionDenied("You don't have permission to delete this Umpire Record")
        return super().perform_destroy(instance)