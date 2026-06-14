from django.http import JsonResponse
import random

def aqi_view(request):
    city = request.GET.get('city', '')
    
    if not city:
        return JsonResponse({"error": "City name is required"}, status=400)
    
    # Smart Mock Data (যাতে প্রত্যেক শহরের জন্য আলাদা ডেটা আসে)
    hash_value = sum(ord(char) for char in city.lower())
    aqi = 20 + (hash_value % 140)
    
    data = {
        "city": city,
        "aqi": aqi,
        "quality": get_quality(aqi),
        "temp": 15 + (hash_value % 25),
        "humidity": 40 + (hash_value % 50),
        "recommendation": get_recommendation(aqi)
    }
    
    return JsonResponse(data)

def get_quality(aqi):
    if aqi <= 50: return "Good"
    if aqi <= 100: return "Moderate"
    if aqi <= 150: return "Unhealthy for Sensitive"
    return "Unhealthy"

def get_recommendation(aqi):
    if aqi <= 50: return "Excellent air quality. Perfect day for outdoor activities."
    if aqi <= 100: return "Air quality is acceptable. Normal daily activities are fine."
    return "Air pollution is high. Limit outdoor exposure when possible."