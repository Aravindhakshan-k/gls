from django.shortcuts import render, redirect
from customer.models import Account
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

def customer_list(request):
    customers = Account.objects.filter(is_deleted=False)
    return render(request, "customer/customer_list.html", {"customers": customers})

def add_customer(request):
    return render(request, "customer/create_customer.html")



def ajax_add_customer(request):
    if request.method == "POST":
        # Core Info
        account_type = request.POST.get("account_type", None)
        name = request.POST.get("name", None)
        print_name = request.POST.get("print_name", None)
        team = request.POST.get("team", None)
        mobile_number = request.POST.get("mobile_number", None)
        business_type = request.POST.get("business_type", None)

        # Contact/Address
        door_no = request.POST.get("door_no", None)
        address = request.POST.get("address", None)
        city = request.POST.get("city", None)
        area = request.POST.get("area", None)
        pincode = request.POST.get("pincode", None)
        district = request.POST.get("district", None)
        state = request.POST.get("state", None)

        # Customer Specific
        customer_image = request.FILES.get("customer_image")
        contact_person_name = request.POST.get("contact_person_name", None)
        customer_number = request.POST.get("customer_number", None)
        alternate_number = request.POST.get("alternate_number", None)
        whatsapp_number = request.POST.get("whatsapp_number", None)
        email = request.POST.get("email", None)
        dob = request.POST.get("dob", None)
        anniversary_date = request.POST.get("anniversary_date", None)
        customer_group = request.POST.get("customer_group", None)
        remarks = request.POST.get("remarks", None)

        try:
            customer = Account.objects.create(
                account_type=account_type,
                name=name,
                print_name=print_name,
                team=team,
                mobile_number=mobile_number,
                business_type=business_type,
                door_no=door_no,
                address=address,
                city=city,
                area=area,
                pincode=pincode,
                district=district,
                state=state,
                customer_image=customer_image,
                contact_person_name=contact_person_name,
                customer_number=customer_number,
                alternate_number=alternate_number,
                whatsapp_number=whatsapp_number,
                email=email,
                dob=dob,
                anniversary_date=anniversary_date,
                customer_group=customer_group,
                remarks=remarks,
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
