from django.shortcuts import render
from models import *

def customer_list(request):
    return render(request, "customer/customer_list.html")


def ajax_add_customer(request):
    if request.method == "POST":
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")
        email = request.POST.get("email")
        phone_number = request.POST.get("phone_number")
        address = request.POST.get("address")

        customer = Customer.objects.create(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone_number=phone_number,
            address=address,
        )
        if customer:
            
    