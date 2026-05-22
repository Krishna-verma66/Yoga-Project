from django.shortcuts import render
from django.http  import JsonResponse, HttpResponse
from django.contrib.auth import authenticate,login, logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSerializer

# Create your views here.





@api_view(['POST'])
def register_view(request):
    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():

        serializer.save()

        return Response(
            {
                "message": "User registered successfully",
                "data": serializer.data
            },
            status=status.HTTP_201_CREATED
        )

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )
    
    
    
@api_view(['POST'])
def login_view(request):
    
    email = request.data.get('email')
    password = request.data.get('password')
    
    user = authenticate(request=request, email=email, password=password)
    
    if(user is not None):
        login(request=request, user=user)
        return Response(
            {
                "message": "User log in successfully",
            },
            status=status.HTTP_201_CREATED
        )

    return Response(
        status=status.HTTP_400_BAD_REQUEST
    )
    

@api_view(['GET'])
def CurrentUser(req):
    
    if req.user.is_authenticated:
        JsonData = UserSerializer(req.user)
        return Response(
            {
                'is_authenticated': True,
                'data': JsonData.data
            },
            status=status.HTTP_201_CREATED
        )
        
    return Response(
        {
            'is_authenticated': False,
            'Error':'no user authenticated data'
        },
        status=status.HTTP_201_CREATED
    )