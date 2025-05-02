from django.db import models

class Customer(models.Model):
    first_name      = models.CharField(max_length=30)
    last_name       = models.CharField(max_length=30)
    email           = models.EmailField()
    phone_number    = models.CharField(max_length=15, blank=True, null=True)
    address         = models.TextField(blank=True, null=True)
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now=True)
    is_active       = models.BooleanField(default=True)
    is_deleted      = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
