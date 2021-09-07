from django.shortcuts import redirect, render
from .models import Bread, Task, Photo
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
from django.contrib.auth.views import LoginView
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
import uuid
import boto3

S3_BASE_URL = 'https://s3.us-east-2.amazonaws.com/'
BUCKET = 'hedda-9721'


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

# @login_required for all of the below functions
def breads_index(request):
  breads = Bread.objects.all()
  return render(request, 'breads/index.html', { 'breads': breads})

def breads_detail(request, bread_id):
  bread = Bread.objects.get(id=bread_id)
  # Get the tasks the bread doesn't have
  tasks_bread_doesnt_have = Task.objects.exclude(id__in = bread.tasks.all().values_list('id'))
  return render(request, 'breads/detail.html', {
    # Add the tasks to be displayed
    'bread': bread, 'tasks': tasks_bread_doesnt_have
  })

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

class TaskList(ListView):
  model = Task

class TaskDetail(DetailView):
  model = Task

class TaskCreate(CreateView):
  model = Task
  fields = ['name', 'hours', 'minutes']

class TaskUpdate(UpdateView):
  model = Task
  fields = ['name', 'hours', 'minutes']

class TaskDelete(DeleteView):
  model = Task
  success_url = '/tasks/'

def add_task(request, bread_id, task_id):
  Bread.objects.get(id=bread_id).tasks.add(task_id)
  return redirect('breads_detail', bread_id=bread_id)

#user can access all their photos in one place
def photos_index(request):
  photos = Photo.objects.all()
  return render(request, 'photos/index.html', { 'photos': photos})


def add_bread_photo(request, bread_id):
  # photo-file will be the "name" attribute on the <input type="file">
  photo_file = request.FILES.get('photo-file', None)
  if photo_file:
    s3 = boto3.client('s3')
    # need a unique "key" for S3 / needs image file extension too
		# uuid.uuid4().hex generates a random hexadecimal Universally Unique Identifier
    # Add on the file extension using photo_file.name[photo_file.name.rfind('.'):]
    key = uuid.uuid4().hex + photo_file.name[photo_file.name.rfind('.'):]
    # just in case something goes wrong
    try:
      s3.upload_fileobj(photo_file, BUCKET, key)
      # build the full url string
      url = f"{S3_BASE_URL}{BUCKET}/{key}"
      # we can assign to bread_id or bread (if you have a bread object)
      photo = Photo(url=url, bread_id=bread_id)
      # Remove old photo if it exists
      bread_photo = Photo.objects.filter(bread_id=bread_id)
      if bread_photo.first():
        bread_photo.first().delete()
      photo.save()
    except Exception as err:
      print('An error occurred uploading file to S3: %s' % err)
  return redirect('breads_detail', bread_id=bread_id)

def add_task_photo(request, task_id):
  photo_file = request.FILES.get('photo-file', None)
  if photo_file:
    s3 = boto3.client('s3')
    # need a unique "key" for S3 / needs image file extension too
		# uuid.uuid4().hex generates a random hexadecimal Universally Unique Identifier
    # Add on the file extension using photo_file.name[photo_file.name.rfind('.'):]
    key = uuid.uuid4().hex + photo_file.name[photo_file.name.rfind('.'):]
    # just in case something goes wrong
    try:
      s3.upload_fileobj(photo_file, BUCKET, key)
      # build the full url string
      url = f"{S3_BASE_URL}{BUCKET}/{key}"
      # we can assign to bread_id or bread (if you have a bread object)
      photo = Photo(url=url, task_id=task_id)
      # Remove old photo if it exists
      task_photo = Photo.objects.filter(task_id=task_id)
      if task_photo.first():
        task_photo.first().delete()
      photo.save()
    except Exception as err:
      print('An error occurred uploading file to S3: %s' % err)
  return redirect('tasks_detail', task_id=task_id)