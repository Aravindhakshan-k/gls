from django.contrib import admin
from django.urls import path
from customer import views

urlpatterns = [
    path("customer-list", views.customer_list, name="customer-list"),
    path("add-customer", views.add_customer, name="add_customer"),
    path("ajax-add-customer", views.ajax_add_customer, name="ajax_add_customer"),
]
