from django.shortcuts import render

def customer_list(request):
    return render(request, "customer/customer_list.html")
