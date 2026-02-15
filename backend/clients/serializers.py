from rest_framework import serializers
from .models import Client

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = "__all__"
        read_only_fields = ["id", "author"]

class ClientAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ["id", "username", "service", "price", "date", "time", "my_price"]
        read_only_fields = ['id']

