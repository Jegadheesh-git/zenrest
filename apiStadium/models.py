# stadium/models.py
from django.db import models
from django.contrib.auth.models import User

class Nationality(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class Stadium(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='stadiums')
    name = models.CharField(max_length=100)
    city = models.CharField(max_length=200)
    nationality = models.ForeignKey(Nationality, on_delete=models.CASCADE)
    capacity = models.IntegerField()

    def __str__(self):
        return self.name
