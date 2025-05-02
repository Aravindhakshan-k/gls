from django.contrib import admin
from django.urls import path
from order import views

urlpatterns = [
    path("order-list", views.order_list, name="order-list"),
]
