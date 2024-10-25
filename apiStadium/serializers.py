# stadium/serializers.py
from rest_framework import serializers
from .models import Stadium, Nationality

class NationalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Nationality
        fields = ['id', 'name']

class StadiumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stadium
        fields = ['id', 'name', 'city', 'nationality', 'capacity']

    def create(self, validated_data):
        user = self.context['request'].user
        validated_data['user'] = user
        return super().create(validated_data)
