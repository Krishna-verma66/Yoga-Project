from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    
    password = serializers.CharField(write_only=True)
    
    class Meta:
        
        model = User
        fields = [
            'first_name',
            'email',
            'password',
            ]
        
    def create(self, validated_data):
         
        first_name = validated_data.get("first_name")
        email = validated_data.get("email")
        password = validated_data.get("password")
        
        user = User.objects.create_user(email=email, password=password)
        user.first_name = first_name
        
        user.save()
        
        return user
    
    def update(self, instance, validated_data):
        
        instance.first_name = validated_data.get("first_name", instance.first_name)
        instance.email = validated_data.get("email", instance.email)
        password = validated_data.get("password", instance.password)
        
        instance.set_password(password)
        
        instance.save()
        return instance
        
