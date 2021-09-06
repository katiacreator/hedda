from django.shortcuts import redirect, render
from .models import Bread, Task, Photo
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
from django.contrib.auth.views import LoginView
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from .forms import TaskForm
# import math

from django.shortcuts import render

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

class BreadUpdate(UpdateView):
  model = Bread
  fields = ['name', 'description']

class BreadDelete(DeleteView):
  model = Bread
  success_url = '/breads/'

# class TaskList(ListView):
#   model = Task

# class TaskDetail(DetailView):
#   model = Task

# class TaskCreate(CreateView):
#   model = Task
#   fields = ['name', 'hours', 'minutes']
def add_task(request, bread_id):
  form = TaskForm(request.POST)
  if form.is_valid():
    new_task = form.save(commit=False)
    new_task.bread_id = bread_id
    new_task.save()
  return redirect('breads_detail', bread_id=bread_id)

  def form_valid(self, form):
    form.instance.user = self.request.user
    return super().form_valid(form)

# class TaskUpdate(UpdateView):
#   model = Task
#   fields = ['name', 'hours', 'minutes']

# class TaskDelete(DeleteView):
#   model = Task
#   success_url = '/tasks/'

def photos_index(request):
  photos = Photo.objects.all()
  return render(request, 'photos/index.html', { 'photos': photos})

# def timer():
#   countdown = 10
#   while countdown != 0:
#     print ('countdown', countdown)
#     countdown = countdown - 1

# timer()