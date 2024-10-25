from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    role = models.CharField(max_length=50)
    favSport = models.CharField(max_length=50)
    hasAcceptedNL = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.user.username