# serializers.py
from rest_framework import serializers
from .models import MatchType, Competition, CompetitionTeamSquad, KnockOut
from apiTeam.serializers import TeamSerializer
from apiPlayer.serializers import PlayerSerializer
class MatchTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchType
        fields = '__all__'

class KnockOutSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnockOut
        fields = '__all__'

class CompetitionSerializer(serializers.ModelSerializer):

    #teams = TeamSerializer(many=True, required=False)
    #matchType = MatchTypeSerializer()
    class Meta:
        model = Competition
        exclude = ['user']

    def validate(self, data):
        user = self.context['request'].user
        tournament = data.get('tournament')
        teams = data.get('teams')

        # Validate tournament ownership
        if tournament and tournament.user != user:
            raise serializers.ValidationError("You do not have permission to use this tournament.")

        # Validate teams ownership
        if teams:
            for team in teams:
                if team.user != user:
                    raise serializers.ValidationError(f"You do not have permission to use the team: {team.name}")

        return data

class CompetitionTeamSquadSerializer(serializers.ModelSerializer):
    players = PlayerSerializer(many=True)
    
    class Meta:
        model = CompetitionTeamSquad
        exclude = ['user']

    def validate(self, data):
        user = self.context['request'].user
        competition = data.get('competition')
        team = data.get('team')
        players = data.get('players')

        if competition and competition.user != user:
            raise serializers.ValidationError("You don't have access to this Competition")
        
        if team and team.user != user:
            raise serializers.ValidationError("You don't have access to this team")

        if players:
            for player in players:
                if player.user != user:
                    raise serializers.ValidationError(f"You do not have permission to use the player: {player.firstName}")

        return data
    
class CompetitionTeamSerializer(serializers.ModelSerializer):
    teams = TeamSerializer(many=True)
    matchType = MatchTypeSerializer()
    
    class Meta:
        model = Competition
        fields = ['id','name','matchType','teams']