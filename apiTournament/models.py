from django.db import models
from django.contrib.auth.models import User

class Tournament(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name
