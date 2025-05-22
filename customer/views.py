from django.shortcuts import render, redirect
from customer.models import Account
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

def customer_list(request):
    customers = Account.objects.all()
    return render(request, "customer/customer_list.html", {"customers": customers})

def add_customer(request):
    return render(request, "customer/create_customer.html")

def ajax_delete_customer(request):
    if request.method == "POST":
        customer_id = request.POST.get("customer_id")
        try:
            customer = Account.objects.get(id=customer_id)
            customer.delete()
            return JsonResponse({"status": "success", "message": "Customer deleted successfully"}, status=200)
        except Account.DoesNotExist:
            return JsonResponse({"status": "error", "message": "Customer not found"}, status=404)
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)


@csrf_exempt
def ajax_add_customer(request):
    if request.method == "POST":
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")
        email = request.POST.get("email")
        phone_number = request.POST.get("phone_number")
        address = request.POST.get("address")

        try:
            customer = Account.objects.create(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone_number=phone_number,
            address=address,
            )
            return JsonResponse(
                {
                    "status": "success",
                    "message": "Customer added successfully",
                    "customer_id": customer.id,
                },
                status=201,
            )
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse(
        {"status": "error", "message": "Invalid request method"}, status=405
    )
