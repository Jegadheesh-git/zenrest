from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import SignupSerializer, LoginSerializer
from rest_framework_simplejwt.tokens import RefreshToken

class SignupView(APIView):
    def post(self, request):
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User created successfully."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            tokens = serializer.get_tokens(serializer.validated_data['user'])
            return Response(tokens, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    def post(self,request):
        try:
            refresh_token = request.data.get('refresh')
            if not refresh_token:
                return Response({'message':'Invalid Logout Request'},status=status.HTTP_400_BAD_REQUEST)
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response({'message':'Logout Successfully'},status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message':str(e)},status=status.HTTP_400_BAD_REQUEST)
