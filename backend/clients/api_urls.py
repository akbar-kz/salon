from rest_framework.routers import DefaultRouter
from .api import ClientViewSet

router = DefaultRouter()
router.register("clients", ClientViewSet, basename="clients")
router.register("clientsadd", ClientViewSet, basename="clientsadd")

urlpatterns = router.urls

