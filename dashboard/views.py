from django.shortcuts import render
from django.contrib.auth import logout
from django.shortcuts import redirect

def dashboard(request):
    return render(request, 'dashboard/dashboard.html')

def logout_view(request):
    logout(request)  
    return redirect('login')