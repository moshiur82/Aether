from django.contrib import admin
from django.urls import path
from .views import aqi_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/aqi/', aqi_view, name='aqi'),
]