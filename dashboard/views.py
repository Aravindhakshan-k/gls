from django.shortcuts import render
from django.shortcuts import redirect

def dashboard(request):
    return render(request, 'dashboard/dashboard.html')
