from django.urls import path
from .views import *

urlpatterns = [
    path('all/', AllSubscriptionPlan.as_view(), name='all-subscription-plans'),
    path('subscribe/', SubscribeToPlanView.as_view(), name='subscribe-to-plan'),
    path('protected/', ProtectedView.as_view(), name='protected-view'),
    path('subscription/update/<int:pk>/', UpdateUserSubscription.as_view(), name='update-user-subscription'),
    path('my-subscriptions/', AllUserSubscriptions.as_view(), name='my-subscriptions' )
]