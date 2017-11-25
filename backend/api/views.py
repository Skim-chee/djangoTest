from django.shortcuts import render
from rest_framework import viewsets
from api.models import User, Show
from api.serializers import UserSerializer, ShowSerializer

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer

class ShowViewSet(viewsets.ModelViewSet):
	queryset = Show.objects.all()
	serializer_class = ShowSerializer
