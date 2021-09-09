from django.db import models
from django.db.models.deletion import CASCADE
from django.urls import reverse
from django.contrib.auth.models import User

class Task(models.Model):
  name = models.CharField(max_length=100)
  hours = models.CharField(max_length=2)
  minutes = models.CharField(max_length=2)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  
  def __str__(self):
    return self.name

  def get_absolute_url(self):
    return reverse('tasks_detail', kwargs={'pk': self.id})

class Bread(models.Model):
  name = models.CharField(max_length=100)
  description = models.TextField(max_length=250)
  tasks = models.ManyToManyField(Task)
  user = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
    return self.name

  def get_absolute_url(self):
    return reverse('breads_detail', kwargs={'bread_id': self.id})


