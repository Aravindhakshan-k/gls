from django.db import models
from customer.models import Customer

class Order(models.Model):
    customer        = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='orders')
    order_number    = models.CharField(max_length=20, unique=True)
    status          = models.CharField(max_length=20, unique=True)
    delivery_date   = models.DateField()
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now=True)
    is_active       = models.BooleanField(default=True)
    is_deleted      = models.BooleanField(default=False)
    note            = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Order {self.order_number} - {self.customer}"
