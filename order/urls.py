from django.contrib import admin
from django.urls import path
from order import views

urlpatterns = [
    path("order-list", views.order_list, name="order-list"),
    path("ajax-add-order", views.ajax_add_order, name="ajax_add_order"),
]
