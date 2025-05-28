from django.shortcuts import render
# from order.models import Order
# from customer.models import Customer
from django.http import JsonResponse

def create_ledger(request):
    return render(request, "ledger/create_ledger.html")


def ledger_list(request):
    return render(request, "ledger/ledger_list.html")