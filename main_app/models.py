from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User

class Task(models.Model):
  name = models.CharField(max_length=100)
  interval = models.IntegerField(default=15)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  
  def __str__(self):
    return self.name

  def get_absolute_url(self):
    return reverse('tasks_detail', kwargs={'pk': self.id})

class Bread(models.Model):
  name = models.CharField(max_length=100)
  description = models.TextField(max_length=250, default='comes with free soy sauce, ginger, and wasabi paste')
  tasks = models.ManyToManyField(Task)
  user = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
    return self.name

  def get_absolute_url(self):
    return reverse('bread_detail', kwargs={'bread_id': self.id})

class Photo(models.Model):
  url = models.CharField(max_length=250)
  bread = models.OneToOneField(Bread, on_delete=models.CASCADE)
  # task = models.OneToOneField(Task, on_delete=models.CASCADE)

  def __str__(self):
    return f"Photo for bread_id: {self.bread_id} @{self.url}" 
