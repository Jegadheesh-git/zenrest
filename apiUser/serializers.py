from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.core.exceptions import ValidationError
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Profile
import re

class SignupSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    company = serializers.CharField()
    role = serializers.CharField()
    favSport = serializers.CharField()
    has_accepted_nl = serializers.BooleanField(required=False)

    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name', 'password', 'company', 'role', 'favSport', 'has_accepted_nl')

    def validate_email(self, value):
        # Regular expression for basic email validation
        email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(email_regex, value):
            raise serializers.ValidationError("Enter a valid email address.")
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value

    def validate_password(self, value):
        # Check password length
        if len(value) < 8:
            raise serializers.ValidationError("Password must be at least 8 characters long.")
        return value

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create_user(
            username=validated_data['email'],  # Use email as username
            email=validated_data['email'],
            password=password,
            first_name=validated_data.get('first_name'),
            last_name=validated_data.get('last_name')
        )
        Profile.objects.create(
            user=user,
            firstName=validated_data.get('first_name'),
            lastName=validated_data.get('last_name'),
            company=validated_data.get('company'),
            role=validated_data.get('role'),
            favSport=validated_data.get('favSport'),
            hasAcceptedNL=validated_data.get('has_accepted_nl')
        )
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        user = authenticate(username=email, password=password)
        if user is None:
            raise ValidationError('Invalid email or password')
        
        return {'user':user}
    
    def get_tokens(self, user):
        refresh = RefreshToken.for_user(user)
        return {
            'access': str(refresh.access_token),
            'refresh': str(refresh)
        }