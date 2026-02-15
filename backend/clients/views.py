from datetime import datetime
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.utils import timezone

from .models import Client


@login_required(login_url="login")
def add_client_view(request):
    if request.method == "GET":
        return render(request, "client/add_client.html")

    # DEBUG: убедись что POST реально приходит
    # print(request.POST)

    action = request.POST.get("action")  # 'client' or 'booking'
    name = (request.POST.get("client_name") or "").strip()
    service = (request.POST.get("service") or "").strip()
    price_type = request.POST.get("price_type")  # 'percent' or 'amount'
    total_price_raw = request.POST.get("total_price")
    my_value_raw = request.POST.get("my_value")
    date_raw = request.POST.get("date")  # YYYY-MM-DD
    time_raw = request.POST.get("time")  # HH:MM

    if not all([action, name, service, total_price_raw, my_value_raw, date_raw, time_raw]):
        return render(request, "client/add_client.html", {"error": "Hamma maydonlarni to'ldiring."})

    try:
        total_price = int(total_price_raw)
        my_value = int(my_value_raw)
        if total_price < 0 or my_value < 0:
            raise ValueError
    except ValueError:
        return render(request, "client/add_client.html", {"error": "Narx noto'g'ri kiritilgan."})

    # calculate my_price
    if price_type == "percent":
        if my_value > 100:
            return render(request, "client/add_client.html", {"error": "Foiz 0-100 oralig'ida bo'lishi kerak."})
        my_price = (total_price * my_value) // 100
    else:
        my_price = my_value

    if my_price > total_price:
        return render(request, "client/add_client.html", {"error": "Menga tegishli jami narxdan katta bo'la olmaydi."})

    # IMPORTANT: Client.date is DateTimeField, so we must combine date + time -> datetime
    try:
        naive_dt = datetime.strptime(f"{date_raw} {time_raw}", "%Y-%m-%d %H:%M")
        dt = timezone.make_aware(naive_dt, timezone.get_current_timezone())
    except ValueError:
        return render(request, "client/add_client.html", {"error": "Sana yoki vaqt noto'g'ri."})

    Client.objects.create(
        author=request.user,
        username=name,
        service=service,
        price=total_price,
        my_price=my_price,
        date=dt,  # ✅ datetime goes here
        time=dt.time(),  # your separate time field
    )

    msg = "Mijoz qo'shildi!" if action == "client" else "Bron qilindi!"
    return render(request, "client/add_client.html", {"success": msg})