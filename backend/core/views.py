from django.shortcuts import render, redirect
# Create your views here.
def homepage_view(request):
    if request.user.is_authenticated:
        return render(request, 'core/homepage.html')
    return redirect('login/')