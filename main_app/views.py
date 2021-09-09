from django.shortcuts import redirect, render
from .models import Bread, Task
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
from django.contrib.auth.views import LoginView
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
import uuid
import boto3

from django.shortcuts import render

class Home(LoginView):
  template_name = 'home.html'

def signup(request):
  error_message = ''
  if request.method == 'POST':
    # This is how to create a 'user' form object
    # that includes the data from the browser
    form = UserCreationForm(request.POST)
    if form.is_valid():
      # This will add the user to the database
      user = form.save()
      # This is how we log a user in
      login(request, user)
      return redirect('breads_index')
    else:
      error_message = 'Invalid sign up - try again'
  # A bad POST or a GET request, so render signup.html with an empty form
  form = UserCreationForm()
  context = {'form': form, 'error_message': error_message}
  return render(request, 'signup.html', context)


def about(request):
  return render(request, 'about.html')

@login_required 
def breads_index(request):
  breads = Bread.objects.all()
  return render(request, 'breads/index.html', { 'breads': breads})

@login_required
def breads_detail(request, bread_id):
  bread = Bread.objects.get(id=bread_id)
  # Get the tasks the bread doesn't have
  tasks_bread_doesnt_have = Task.objects.exclude(id__in = bread.tasks.all().values_list('id'))
  return render(request, 'breads/detail.html', {
    # Add the tasks to be displayed
    'bread': bread, 'tasks': tasks_bread_doesnt_have
  })

@login_required
class BreadCreate(CreateView):
  model = Bread
  fields = ['name', 'description']

  def form_valid(self, form):
    form.instance.user = self.request.user
    return super().form_valid(form)

@login_required
class BreadUpdate(UpdateView):
  model = Bread
  fields = ['name', 'description']

@login_required
class BreadDelete(DeleteView):
  model = Bread
  success_url = '/breads/'

@login_required
class TaskList(ListView):
  model = Task

@login_required
class TaskDetail(DetailView):
  model = Task

@login_required
class TaskCreate(CreateView):
  model = Task
  fields = ['name', 'hours', 'minutes']

@login_required
class TaskUpdate(UpdateView):
  model = Task
  fields = ['name', 'hours', 'minutes']

@login_required
class TaskDelete(DeleteView):
  model = Task
  success_url = '/tasks/'

@login_required
def add_task(request, bread_id, task_id):
  Bread.objects.get(id=bread_id).tasks.add(task_id)
  return redirect('breads_detail', bread_id=bread_id)

