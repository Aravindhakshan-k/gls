from django.db import models

class Account(models.Model):
    # Core Info
    account_type = models.CharField(max_length=50)
    name = models.CharField(max_length=255)
    print_name = models.CharField(max_length=255, blank=True, null=True)
    team = models.CharField(max_length=100, blank=True, null=True)
    mobile_number = models.CharField(max_length=20, blank=True, null=True)
    business_type = models.CharField(max_length=100, blank=True, null=True)

    # Contact/Address
    door_no = models.CharField(max_length=100, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    area = models.CharField(max_length=100, blank=True, null=True)
    pincode = models.CharField(max_length=20, blank=True, null=True)
    district = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)

    # Customer Specific
    customer_image = models.ImageField(upload_to='customer_images/', blank=True, null=True)
    contact_person_name = models.CharField(max_length=255, blank=True, null=True)
    customer_number = models.CharField(max_length=100, blank=True, null=True)
    alternate_number = models.CharField(max_length=20, blank=True, null=True)
    whatsapp_number = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    dob = models.DateField(blank=True, null=True)
    anniversary_date = models.DateField(blank=True, null=True)
    customer_group = models.CharField(max_length=100, blank=True, null=True)
    remarks = models.TextField(blank=True, null=True)

    # Ledger Specific
    parent_group = models.CharField(max_length=100, blank=True, null=True)
    gst_no = models.CharField(max_length=20, blank=True, null=True)
    pan_number = models.CharField(max_length=20, blank=True, null=True)
    opening_balance_amount = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    opening_balance_amount_crdr = models.CharField(max_length=2, choices=[('CR', 'Credit'), ('DR', 'Debit')], blank=True, null=True)
    opening_balance_pure_weight = models.DecimalField(max_digits=12, decimal_places=3, blank=True, null=True)
    opening_balance_pure_weight_crdr = models.CharField(max_length=2, choices=[('CR', 'Credit'), ('DR', 'Debit')], blank=True, null=True)

    def __str__(self):
        return self.name
