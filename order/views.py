from django.shortcuts import render
# from order.models import Order
# from customer.models import Customer
from django.http import JsonResponse

def order_list(request):
    customer = Customer.objects.all()
    order = Order.objects.all()
    return render(request, "order/order-list.html", {'customers': customer, 'orders': order})


def ajax_add_order(request):
    if request.method == 'POST':
        customer_id = request.POST.get('customer_id')
        order_number = request.POST.get('order_number')
        delivery_date = request.POST.get('delivery_date')
        note = request.POST.get('note')

        try:
            order = Order.objects.create(
                customer_id=customer_id,
                order_number=order_number,
                delivery_date=delivery_date,
                note=note
            )
            return JsonResponse({
                'status': 'success',
                'message': 'Order added successfully',
                'order_id': order.id
            }, status=201)
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=500)