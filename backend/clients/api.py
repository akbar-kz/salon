from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import Client
from .serializers import ClientSerializer, ClientAddSerializer

class ClientViewSet(ModelViewSet):
    serializer_class = ClientSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Client.objects.filter(author=self.request.user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
class ClientAddViewSet(ModelViewSet):
    serializer_class = ClientAddSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Client.objects.filter(author=self.request.user).order_by("-id")

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)