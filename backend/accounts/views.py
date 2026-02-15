from django.shortcuts import render, redirect
from django.contrib.auth import login, get_user_model, authenticate, logout
from django.contrib.auth.models import User
from django.db.models import Q

User = get_user_model()

def register_view(request):
    if request.method == "GET":
        return render(request, "accounts/register.html")

    if request.method == "POST":
        username = request.POST.get("username", "").strip()
        email = request.POST.get("email", "").strip()
        password = request.POST.get("password", "")

        if not username or not password or not email:
            return render(request, "accounts/register.html", {
                "error": "Username, email and password are required."
            })

        if User.objects.filter(Q(username=username) | Q(email=email)).exists():
            return render(request, "accounts/register.html", {
                "error": "Username or email already taken."
            })

        user = User.objects.create_user(username=username, email=email, password=password)
        login(request, user)

        return redirect('/')

def login_view(request):
    if request.method == "GET":
        return render(request, "accounts/login.html")
    if request.method == "POST":
        username = request.POST.get("username", "").strip()
        password = request.POST.get("password", "")
        if username and password:
            user = authenticate(request, username=username, password=password)
            if user:
                login(request, user)
                return redirect("/")
            return render(request, "accounts/login.html", {
                "error": "Invalid username or password"
            })
        return render(request, "accounts/login.html", {
                "error": "Username or password incorrect."
            })
def logout_view(request):
    logout(request)
    return redirect("/login/")
