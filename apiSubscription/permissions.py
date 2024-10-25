from rest_framework.permissions import BasePermission
from .models import UserSubscription
from datetime import date

class HasActiveSubscription(BasePermission):
    def has_permission(self, request, view):
        # Check if the user has an active subscription
        return UserSubscription.objects.filter(user=request.user, end_date__gte=date.today()).exists()
