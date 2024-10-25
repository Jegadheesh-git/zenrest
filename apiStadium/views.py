# stadium/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from .models import Stadium, Nationality
from .serializers import StadiumSerializer, NationalitySerializer
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q

# Stadium Views
class AllStadiumsListView(generics.ListAPIView):
    serializer_class = StadiumSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        return Stadium.objects.filter(user=self.request.user)

class StadiumListView(generics.ListCreateAPIView):
    serializer_class = StadiumSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination

    def get_queryset(self):
        queryset = Stadium.objects.filter(user=self.request.user).order_by('-id')
        
        # Apply search filter if search query exists
        search_query = self.request.query_params.get('search', None)
        if search_query:
            queryset = queryset.filter(
                Q(name__icontains=search_query) | 
                Q(city__icontains=search_query) |
                Q(nationality__name__icontains=search_query)  # Search in related Nationality's name
            )
        
        return queryset

    def perform_create(self, serializer):
        # Save the stadium with the authenticated user as the owner
        serializer.save(user=self.request.user)

class StadiumDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = StadiumSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Ensure the stadium belongs to the authenticated user
        return Stadium.objects.filter(user=self.request.user)

    def perform_update(self, serializer):
        # Ensure the authenticated user can only update their own stadiums
        stadium = self.get_object()
        if stadium.user != self.request.user:
            raise PermissionDenied("You do not have permission to update this stadium.")
        serializer.save()

    def perform_destroy(self, instance):
        # Ensure the authenticated user can only delete their own stadiums
        if instance.user != self.request.user:
            raise PermissionDenied("You do not have permission to delete this stadium.")
        instance.delete()

    

# Nationality View (read-only)
class NationalityListView(generics.ListAPIView):
    queryset = Nationality.objects.all()
    serializer_class = NationalitySerializer
    permission_classes = []  # Public access (no authentication required)
    pagination_class = None
