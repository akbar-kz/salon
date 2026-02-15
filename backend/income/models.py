from django.conf import settings
from django.db import models

class IncomeEntry(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="income_entries")

    client_name = models.CharField(max_length=255)
    service = models.CharField(max_length=255)

    date = models.DateField()
    total_price = models.PositiveIntegerField()
    my_price = models.PositiveIntegerField()
    rent_price = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.client_name} - {self.date}"