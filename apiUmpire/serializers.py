from rest_framework import serializers
from .models import Umpire

class UmpireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Umpire
        fields = ['id','name','nationality','age']

    def create(self, validated_data):
        user = self.context['request'].user
        validated_data['user'] = user
        return super().create(validated_data)