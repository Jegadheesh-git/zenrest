from django.db import models
from apiMatch.models import Match
from apiTeam.models import Team
from apiPlayer.models import Player
from django.contrib.auth.models import User

class Ball(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    match =  models.ForeignKey(Match,on_delete=models.CASCADE)
    innings = models.IntegerField()
    ballOver = models.FloatField()
    ballNumber = models.IntegerField()
    striker = models.ForeignKey(Player,on_delete=models.CASCADE, related_name='striker')
    nonStriker = models.ForeignKey(Player,on_delete=models.CASCADE,related_name='non_striker')
    bowler = models.ForeignKey(Player,on_delete=models.CASCADE,related_name='bowler')

    strikerRuns = models.IntegerField(default=0)
    bowlerRuns = models.IntegerField(default=0)
    extraRuns = models.IntegerField(default=0)
    teamRuns = models.IntegerField(default=0)

    isBoundary = models.BooleanField(default=False)

    wideRuns = models.IntegerField(default=0)
    noBallRuns = models.IntegerField(default=0)
    penaltyRuns = models.IntegerField(default=0)
    legByeRuns = models.IntegerField(default=0)
    byeRuns = models.IntegerField(default=0)
    noBallType = models.CharField(max_length=30,null=True,blank=True)

    isShortRuns = models.BooleanField(default=False)

    overThrowRuns = models.IntegerField(default=0)
    fielder1 = models.ForeignKey(Player,null=True, blank=True, on_delete=models.CASCADE,related_name='fielder1')
    fielder2 = models.ForeignKey(Player,null=True, blank=True, on_delete=models.CASCADE,related_name='fielder2')

    wicketType = models.CharField(max_length=30,null=True,blank=True)
    dismissedPlayer = models.ForeignKey(Player, null=True, blank=True, on_delete = models.CASCADE, related_name='dismissedPlayer')
    dismissedBy = models.ForeignKey(Player, null=True, blank=True, on_delete = models.CASCADE, related_name='dismissalBy')
    caughtBy = models.ForeignKey(Player, null=True, blank=True, on_delete = models.CASCADE, related_name='caughtBy')
    stumpedBy = models.ForeignKey(Player, null=True, blank=True, on_delete = models.CASCADE, related_name='stumpedBy')
    runOutFielder1 = models.ForeignKey(Player, null=True, blank=True, on_delete = models.CASCADE, related_name='runOutFielder1')
    runOutFielder2 = models.ForeignKey(Player, null=True, blank=True, on_delete = models.CASCADE, related_name='runOutFielder2')

    editLater = models.BooleanField(default=False)

    deliveryType = models.CharField(max_length=20, null=True, blank=True)
    creaseMovement = models.CharField(max_length=20, null=True, blank=True)
    shotConnection = models.CharField(max_length=20, null=True, blank=True)
    batSubject = models.CharField(max_length=20, null=True, blank=True)
    stroke = models.CharField(max_length=20, null=True, blank=True)
    keeperActivity = models.CharField(max_length=20, null=True, blank=True)
    batsmanActivity = models.CharField(max_length=20, null=True, blank=True)
    fieldingActivity = models.CharField(max_length=20, null=True, blank=True)
    umpireActivity = models.CharField(max_length=20, null=True, blank=True)

    shotZoneX = models.FloatField(null=True, blank=True)
    shotZoneY = models.FloatField(null=True, blank=True)
    wagonWheelX = models.FloatField(null=True, blank=True)
    wagonWheelY = models.FloatField(null=True, blank=True)
    ballTrajectoryX = models.FloatField(null=True, blank=True)
    ballTrajectoryY = models.FloatField(null=True, blank=True)
    wicketKeeperPosition = models.CharField(max_length=30, null=True, blank=True)
    bowlerReleaseX = models.FloatField(null=True, blank=True)
    bowlerReleaseY = models.FloatField(null=True, blank=True)
    bowlerReleasePosition = models.CharField(max_length=30, null=True, blank=True)


