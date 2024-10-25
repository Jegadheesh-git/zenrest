# models.py
from django.db import models
from apiTournament.models import Tournament
from apiStadium.models import Nationality
from django.contrib.auth.models import User
from apiTeam.models import Team
from apiPlayer.models import Player

class MatchType(models.Model):
    name = models.CharField(max_length=250)
    innings = models.IntegerField(default=2)
    isLimitedOvers = models.BooleanField(default=True)
    activePlayersPerTeam = models.IntegerField(default=11)
    oversPerInnings = models.IntegerField()
    ballsPerOver = models.IntegerField()
    widePenaltyRuns = models.IntegerField()
    noBallPenaltyRuns = models.IntegerField()
    hasFreeHit = models.BooleanField()
    superOverOvers = models.IntegerField(default=1)
    superOverActivePlayersPerTeam = models.IntegerField(default=2)

    def __str__(self) -> str:
        return self.name
    
class KnockOut(models.Model):
    name=models.CharField(max_length=30)

    def __str__(self) -> str:
        return self.name

class Competition(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=250)
    displayName = models.CharField(max_length=250)
    year = models.CharField(max_length=20)
    matchType = models.ForeignKey(MatchType, on_delete=models.CASCADE)
    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE)
    fromDate = models.DateField()
    toDate = models.DateField()
    matchCount = models.IntegerField()
    gender = models.CharField(max_length=15)
    teams = models.ManyToManyField(Team)
    hostingNation = models.ForeignKey(Nationality, on_delete=models.CASCADE, null=True, blank=True)

    hasUpdatedTeams = models.BooleanField(default=False)
    hasUpdatedSquad = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name + " - " + str(self.pk)

class CompetitionTeamSquad(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    competition = models.ForeignKey(Competition,on_delete=models.CASCADE)
    team = models.ForeignKey(Team,on_delete=models.CASCADE)
    players = models.ManyToManyField(Player)

    def __str__(self) -> str:
        return str(self.competition.name) + " - " + str(self.team.name)