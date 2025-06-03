from django.contrib import admin
from django.urls import path
from order import views

urlpatterns = [
    path("create-ledger", views.create_ledger, name="create-ledger"),
    path("ledger-list", views.ledger_list, name="ledger-list"),
    path("ajax-create-ledger", views.ajax_create_ledger, name="ajax-create-ledger"),
]
