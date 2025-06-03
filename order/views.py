from django.shortcuts import render
# from order.models import Order
from customer.models import Account
from django.http import JsonResponse

def create_ledger(request):
    return render(request, "ledger/create_ledger.html")


def ledger_list(request):
    ledgers = Account.objects.filter(is_deleted=False)
    return render(request, "ledger/ledger_list.html", {"ledgers": ledgers})

def ajax_create_ledger(request):
    if request.method == "POST":
        # Get basic ledger info
        ledger_name = request.POST.get("ledger_name")
        print_name = request.POST.get("print_name")
        parent_group = request.POST.get("parent_group")
        team = request.POST.get("team")
        account_type = request.POST.get("account_type")
        
        # Get contact/address details
        address = request.POST.get("address")
        city = request.POST.get("city")
        area = request.POST.get("area")
        pincode = request.POST.get("pincode")
        state = request.POST.get("state")
        
        # Get business details
        gst_no = request.POST.get("gst_no")
        pan_number = request.POST.get("pan_number")
        mobile_number = request.POST.get("mobile_number")
        business_type = request.POST.get("business_type")
        
        # Get opening balance details
        opening_balance_amount = request.POST.get("opening_balance_amount")
        opening_balance_amount_crdr = request.POST.get("amount_cr_dr")
        opening_balance_pure_weight = request.POST.get("opening_balance_pure_weight")
        opening_balance_pure_weight_crdr = request.POST.get("weight_cr_dr")

        try:
            account = Account.objects.create(
                name=ledger_name,
                print_name=print_name, 
                parent_group=parent_group,
                team=team,
                account_type=account_type,
                address=address,
                city=city,
                area=area,  
                pincode=pincode,
                state=state,
                gst_no=gst_no,
                pan_number=pan_number,
                mobile_number=mobile_number,
                business_type=business_type,
                opening_balance_amount=opening_balance_amount,
                opening_balance_amount_crdr=opening_balance_amount_crdr,
                opening_balance_pure_weight=opening_balance_pure_weight,
                opening_balance_pure_weight_crdr=opening_balance_pure_weight_crdr
            )
            return JsonResponse({"status": "success", "message": "Ledger created successfully"})
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)})

    return render(request, "ledger/create_ledger.html")
