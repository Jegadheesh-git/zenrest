from django.db import models
from django.contrib.auth.models import User
from datetime import date
class SubscriptionPlanCategory(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self) -> str:
        return self.name

class SubscriptionDuration(models.Model):
    name = models.CharField(max_length=20)
    def __str__(self) -> str:
        return self.name
    
class SubscriptionPlan(models.Model):
    name = models.CharField(max_length=20)
    displayName = models.CharField(max_length=50, default='')
    description = models.CharField(max_length=100)
    category = models.ForeignKey(SubscriptionPlanCategory, on_delete=models.CASCADE)
    durationCategory = models.ForeignKey(SubscriptionDuration, on_delete=models.CASCADE)
    price = models.FloatField()
    razorPayPlanId = models.CharField(max_length=100)
    url = models.CharField(max_length=250)
    
    def __str__(self) -> str:
        return self.category.name + " "+ self.name

class UserSubscription(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plan = models.ForeignKey(SubscriptionPlan, on_delete=models.CASCADE)
    razorPayPlanId = models.CharField(max_length=200, default='')
    startDate = models.DateField(auto_now_add=True)
    end_date = models.DateField()
    isValid = models.BooleanField(default=False)

    def is_active(self):
        # Check if the subscription is still active
        return self.end_date >= date.today()
    
    def __str__(self) -> str:
        return str(self.user) + " - " + str(self.plan)