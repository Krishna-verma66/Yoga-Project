from django.db import models
from django.contrib.auth.models import AbstractUser

from .managers import CustomUserManager

# Create your models here.

class User(AbstractUser):
    CHOICES = (
        ("practitioner", "Practitioner"),
        ("trainer", "Trainer"),
        ("admin", "Admin"),
        ("dietexpert", "DietExpert")
    )
    
    GenderChoice = (
        ('Male', 'MALE'),
        ('Female', 'FEMALE'),
        ('Other', 'OTHER')
    )
    
    username = None
    
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    
    date_of_birth = models.DateField(
        null=True,
        blank=True, 
        verbose_name="Date Of Birth"
        )
    
    gender = models.CharField(
        max_length=50,
        null=True, 
        blank=True,
        choices=GenderChoice
        )
    
    
    bio = models.TextField(
        blank=True, 
        default=""
        )
    
    profilePic = models.ImageField(
        upload_to='profile_photos/', 
        null=True, 
        blank=True
        )
    
    role = models.CharField(
        max_length=20, 
        choices=CHOICES,
        default='practitioner'
        )
    
    is_verified = models.BooleanField(default=False)
    created_at = models.DateField(auto_now_add=True)
    REQUIRED_FIELDS = []
    
    objects = CustomUserManager()
    
    

