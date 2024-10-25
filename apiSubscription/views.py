from rest_framework import generics
from rest_framework.exceptions import PermissionDenied
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import SubscriptionPlan, UserSubscription
from .serializers import SubscriptionPlanSerializer, UserSubscriptionSerializer
import razorpay
from django.conf import settings
from datetime import timedelta, date
from .permissions import HasActiveSubscription
from itertools import groupby
from operator import attrgetter
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

razorpay_client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

class ProtectedView(APIView):
    permission_classes = [IsAuthenticated, HasActiveSubscription]

    def get(self, request):
        return Response({"message": "You have access to this view because you have an active subscription."})
class SubscribeToPlanView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        plan_id = request.data.get('plan_id')
        print(plan_id)
        try:
            # Find the selected subscription plan
            plan = SubscriptionPlan.objects.get(id=plan_id)
            
            # Create subscription in Razorpay
            subscription_data = {
                'plan_id': plan.razorPayPlanId,
                'total_count': 12,  # Example: 12 billing cycles (monthly/yearly)
                'customer_notify': 1
            }
            razorpay_subscription = razorpay_client.subscription.create(subscription_data)

            print(razorpay_subscription)
            
            # Set end date based on duration (Example: 1 year subscription)
            end_date = date.today() + timedelta(days=365)  # Adjust based on plan duration

            # Create the user subscription record
            userSubscription = UserSubscription.objects.create(
                user=request.user,
                plan=plan,
                razorPayPlanId=razorpay_subscription["id"],
                end_date=end_date
            )

            return Response({"message": "Subscription successful","subscriptionId":razorpay_subscription['id'],"keyId":settings.RAZORPAY_KEY_ID,"userSubscription":userSubscription.pk}, status=status.HTTP_201_CREATED)

        except SubscriptionPlan.DoesNotExist:
            return Response({"error": "Invalid plan ID"}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

class AllSubscriptionPlan(generics.ListAPIView):
    serializer_class = SubscriptionPlanSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        # Get all subscription plans ordered by category ID with related category data
        subscriptions = SubscriptionPlan.objects.all().select_related('category').order_by('category__id')
        
       # Get the user's valid subscriptions
        user_subscriptions = UserSubscription.objects.filter(
            user=self.request.user, isValid=True
        ).values_list('plan_id', flat=True)

        # Add 'isSubscribed' field to each subscription
        for plan in subscriptions:
            plan.isSubscribed = plan.id in user_subscriptions

        return subscriptions

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()

        # Group the subscription plans by category
        grouped_subscriptions = []
        for category, plans in groupby(queryset, key=attrgetter('category')):
            # Serialize the plans within each category
            serialized_plans = SubscriptionPlanSerializer(list(plans), many=True).data
            grouped_subscriptions.append({
                'category': category.name,
                'plans': serialized_plans
            })
        
        return Response(grouped_subscriptions)

class UpdateUserSubscription(APIView):

    def put(self, request, pk, format=None):
        # Fetch the user subscription using the primary key (pk)
        user_subscription = get_object_or_404(UserSubscription, pk=pk)
        
        # Deserialize the request data and update the subscription
        serializer = UserSubscriptionSerializer(user_subscription, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()  # Save the updated subscription data
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class AllUserSubscriptions(generics.ListAPIView):
    serializer_class = UserSubscriptionSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None
    def get_queryset(self):
        queryset = UserSubscription.objects.filter(user=self.request.user)
        return queryset