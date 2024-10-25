from django.contrib import admin
from .models import Competition, MatchType, CompetitionTeamSquad, KnockOut
# Register your models here.
admin.site.register(Competition)
admin.site.register(KnockOut)
admin.site.register(MatchType)
admin.site.register(CompetitionTeamSquad)
