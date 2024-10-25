from django.db import models
from apiStadium.models import Nationality
from django.contrib.auth.models import User

# Create your models here.
class Umpire(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='umpires')
    name = models.CharField(max_length=100)
    nationality = models.ForeignKey(Nationality,on_delete=models.CASCADE)
    age = models.IntegerField(null=True,blank=True)

    def __str__(self) -> str:
        return self.name + ' - '+self.nationality.name