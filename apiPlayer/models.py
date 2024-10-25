from django.db import models
from django.contrib.auth.models import User
from apiStadium.models import Nationality

class Player(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    firstName = models.CharField(max_length=50)
    middleName = models.CharField(max_length=50, null=True, blank=True)
    lastName = models.CharField(max_length=50, null=True, blank=True)
    nickName = models.CharField(max_length=50, null=True, blank=True)
    nationality = models.ForeignKey(Nationality, on_delete=models.CASCADE)
    dob = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10)
    height = models.FloatField(null=True, blank=True)
    weight = models.FloatField(null=True, blank=True)
    battingHand = models.CharField(max_length=50, null=True, blank=True)
    bowlingHand = models.CharField(max_length=50, null=True, blank=True)


    role = models.CharField(max_length=50, null=True, blank=True)
    bowling = models.CharField(max_length=20, null=True, blank=True)
    batting = models.CharField(max_length=20, null=True, blank=True)
    fielding = models.CharField(max_length=20, null=True, blank=True)
    wicketKeeping = models.CharField(max_length=20, null=True, blank=True)
    heightType = models.CharField(max_length=50, null=True, blank=True)
    bowlingType = models.CharField(max_length=50, null=True, blank=True)
    battingType = models.CharField(max_length=50, null=True, blank=True)
    

    def __str__(self):
        return f"{self.firstName} {self.lastName or ''}"
