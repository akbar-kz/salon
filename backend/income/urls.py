from django.urls import path
from .views import income_view

urlpatterns = [
    path('income/', income_view, name='income')
]