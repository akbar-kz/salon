from datetime import date as dt_date, datetime
from django.contrib.auth.decorators import login_required
from django.db.models import Sum, Count, F, IntegerField, ExpressionWrapper
from django.db.models.functions import Coalesce
from django.shortcuts import render
from clients.models import Client

@login_required(login_url="login")
def income_view(request):
    base_qs = Client.objects.filter(author=request.user)

    q_name = (request.GET.get("name") or "").strip()
    q_date = (request.GET.get("date") or "").strip()

    qs = base_qs
    if q_name:
        qs = qs.filter(username__icontains=q_name)

    if q_date:
        try:
            q_date_obj = datetime.strptime(q_date, "%Y-%m-%d").date()
            qs = qs.filter(date=q_date_obj)
        except ValueError:
            pass

    def stats(q):
        total = q.aggregate(v=Coalesce(Sum("price"), 0))["v"]
        mine = q.aggregate(v=Coalesce(Sum("my_price"), 0))["v"]
        clients_count = q.aggregate(v=Coalesce(Count("id"), 0))["v"]
        rent = total - mine
        return total, mine, rent, clients_count

    today_total, today_mine, today_rent, today_clients = stats(
        base_qs.filter(date=dt_date.today())
    )

    total_income, my_income, rent_income, _ = stats(qs)

    if total_income > 0:
        my_percent = round((my_income / total_income) * 100)
        rent_percent = 100 - my_percent
    else:
        my_percent = 0
        rent_percent = 0
        
    return render(request, "income/income.html", {
        "today_total": today_total,
        "today_mine": today_mine,
        "today_rent": today_rent,
        "today_clients": today_clients,

        "total_income": total_income,
        "my_income": my_income,
        "rent_income": rent_income,
        "my_percent": my_percent,
        "rent_percent": rent_percent,
        "bar_mine_width": my_percent,
        "bar_rent_width": rent_percent,

        "clients": qs.order_by("-date", "-time", "-id")[:500],
        "q_name": q_name,
        "q_date": q_date,
    })