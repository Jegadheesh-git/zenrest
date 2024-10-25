from django.db import models
from django.contrib.auth.models import User

class Team(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    shortName = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name + " ( " + self.shortName + " )"