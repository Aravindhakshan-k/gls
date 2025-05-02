from django.contrib import admin
from django.urls import path
from customer import views

urlpatterns = [
    path("customer-list", views.customer_list, name="customer-list"),
]
