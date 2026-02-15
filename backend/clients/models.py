from django.db import models
from django.conf import settings

class Client(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="clients")
    username = models.CharField(max_length=100)       
    service = models.TextField()
    price = models.IntegerField(default=0)             
    date = models.DateField()                          
    time = models.TimeField()
    my_price = models.IntegerField(default=0)

    @property
    def rent_price(self):
        return max(self.price - self.my_price, 0)
    


