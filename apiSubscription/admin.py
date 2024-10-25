from django.contrib import admin
from .models import SubscriptionPlanCategory, SubscriptionDuration, SubscriptionPlan, UserSubscription
# Register your models here.
admin.site.register(SubscriptionPlanCategory)
admin.site.register(SubscriptionDuration)
admin.site.register(SubscriptionPlan)
admin.site.register(UserSubscription)
