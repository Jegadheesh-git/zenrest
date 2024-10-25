from django.db import models
from apiCompetition.models import Competition
from apiStadium.models import Stadium
from apiCompetition.models import MatchType
from apiTeam.models import Team
from apiPlayer.models import Player
from apiUmpire.models import Umpire
from django.contrib.auth.models import User

class Match(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    competition = models.ForeignKey(Competition,on_delete=models.CASCADE)
    date = models.DateField()
    stadium = models.ForeignKey(Stadium,on_delete=models.CASCADE)
    matchType = models.ForeignKey(MatchType, on_delete=models.CASCADE)
    matchCondition = models.CharField(max_length=30,null=True,blank=True)
    team1 = models.ForeignKey(Team, on_delete=models.CASCADE,related_name='team1')
    team2 = models.ForeignKey(Team, on_delete=models.CASCADE,related_name='team2')
    knockOut = models.CharField(max_length=30,null=True,blank=True)
    tossWonBy = models.ForeignKey(Team,on_delete=models.CASCADE,null=True,blank=True)
    optTo = models.CharField(max_length=20,null=True,blank=True)
    isVideoCaptureEnabled = models.CharField(max_length=3)

    firstUmpire = models.ForeignKey(Umpire,on_delete=models.CASCADE,null=True,blank=True,related_name='umpire1')
    secondUmpire = models.ForeignKey(Umpire,on_delete=models.CASCADE,null=True,blank=True,related_name='umpire2')
    thirdUmpire = models.ForeignKey(Umpire,on_delete=models.CASCADE,null=True,blank=True,related_name='umpire3')

    currentInnings = models.IntegerField(default=1)

    firstInningsBattingTeam = models.ForeignKey(Team, on_delete=models.CASCADE,related_name='firstInningsBattingTeam',null=True,blank=True)
    firstInningsBowlingTeam = models.ForeignKey(Team, on_delete=models.CASCADE,related_name='firstInningsBowlingTeam',null=True,blank=True)

    secondInningsBattingTeam = models.ForeignKey(Team, on_delete=models.CASCADE,related_name='secondInningsBattingTeam',null=True,blank=True)
    secondInningsBowlingTeam = models.ForeignKey(Team, on_delete=models.CASCADE,related_name='secondInningsBowlingTeam',null=True,blank=True)

    thirdInningsBattingTeam = models.ForeignKey(Team, on_delete=models.CASCADE,related_name='thirdInningsBattingTeam',null=True,blank=True)
    thirdInningsBowlingTeam = models.ForeignKey(Team, on_delete=models.CASCADE,related_name='thirdInningsBowlingTeam',null=True,blank=True)

    fourthInningsBattingTeam = models.ForeignKey(Team, on_delete=models.CASCADE,related_name='fourthInningsBattingTeam',null=True,blank=True)
    fourthInningsBowlingTeam = models.ForeignKey(Team, on_delete=models.CASCADE,related_name='fourthInningsBowlingTeam',null=True,blank=True)

    playingSquadCount = models.IntegerField(default=0)
    currentTarget = models.IntegerField(default=0)
    currentLeadingTeam = models.ForeignKey(Team, null=True, blank=True, on_delete=models.CASCADE, related_name='leading_team')
    currentSuperOverCount = models.IntegerField(null=True, blank=True)

    leadingTeamChoseTo = models.CharField(max_length=20, default='')
    matchEnded = models.BooleanField(default=False)
    matchResult = models.CharField(max_length=50, default='')

    def __str__(self) -> str:
        return self.competition.name + " - " + str(self.pk)

class PlayingSquad(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    match = models.ForeignKey(Match,on_delete=models.CASCADE)
    team = models.ForeignKey(Team,on_delete=models.CASCADE)
    players = models.ManyToManyField(Player,related_name='players')
    captain = models.ForeignKey(Player,on_delete=models.CASCADE,related_name='captain')
    wicketKeeper = models.ForeignKey(Player,on_delete=models.CASCADE,related_name='wicketkeper')
    
    def __str__(self) -> str:
        return self.match.team1.name + "vs" + self.match.team2.name + " - " + self.team.name


