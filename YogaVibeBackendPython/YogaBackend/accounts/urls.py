from django.urls import path
from .views import register_view, login_view, CurrentUser

urlpatterns = [
    path('register/', register_view, name="SignUp"),
    path('login/', login_view, name="Signin"),
    path('me/', CurrentUser, name="Authenticated User"),
]