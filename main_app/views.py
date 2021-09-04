from django.shortcuts import redirect, render
from .models import Bread, Task, Photo
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
from django.contrib.auth.views import LoginView
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin

from django.shortcuts import render

# breads = [
#   Bread('Sourdough Loaf', 'sourdough duh'),
#   Bread('Sourdough FlatBread', 'sourdough duh'),
#   Bread('Sourdough Pancake', 'sourdough duh'),
#   Bread('Sourdough Muffins', 'sourdough duh'),
# ]

def home(request):
  return render(request, 'home.html')

def about(request):
  return render(request, 'about.html')

# @login_required for all of the below functions
def breads_index(request):
  breads = Bread.objects.all()
  return render(request, 'breads/index.html', { 'breads': breads})


def breads_detail(request, bread_id):
  bread = Bread.objects.get(id=bread_id)
  return render(request, 'breads/detail.html', {'bread': bread})

class BreadCreate(CreateView):
  model = Bread
  fields = ['name', 'description']


  def form_valid(self, form):
    form.instance.user = self.request.user
    return super().form_valid(form)
















def tasks_index(request):
  tasks = Task.objects.all()
  return render(request, 'tasks/index.html', { 'tasks': tasks})

def photos_index(request):
  photos = Photo.objects.all()
  return render(request, 'photos/index.html', { 'photos': photos})