from rest_framework import serializers
from .models import SubscriptionPlan, SubscriptionDuration, UserSubscription

class SubscriptionDurationSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubscriptionDuration
        fields = ['id','name']


class SubscriptionPlanSerializer(serializers.ModelSerializer):
    isSubscribed = serializers.BooleanField(default=False)
    durationCategory = SubscriptionDurationSerializer()
    class Meta:
        model = SubscriptionPlan
        fields = ['id','name','displayName', 'description', 'category','durationCategory' ,'price', 'razorPayPlanId', 'isSubscribed','url']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Add the isSubscribed field manually
        representation['isSubscribed'] = getattr(instance, 'isSubscribed', False)
        return representation

class UserSubscriptionSerializer(serializers.ModelSerializer):
    plan = SubscriptionPlanSerializer()
    class Meta:
        model = UserSubscription
        fields = ['plan', 'razorPayPlanId', 'startDate', 'end_date', 'isValid']

    def update(self, instance, validated_data):
        instance.plan = validated_data.get('plan', instance.plan)
        instance.razorPayPlanId = validated_data.get('razorPayPlanId', instance.razorPayPlanId)
        instance.startDate = validated_data.get('startDate', instance.startDate)
        instance.end_date = validated_data.get('end_date', instance.end_date)
        instance.isValid = validated_data.get('isValid', instance.isValid)
        instance.save()
        return instance
