from django.urls import path
from .views import add_client_view

urlpatterns = [
    path('addclient/', add_client_view, name='add_client')
]