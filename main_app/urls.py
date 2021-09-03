from django.urls import path
from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('about/', views.about, name='about'),
  path('breads/', views.breads_index, name='breads_index'),
  path('tasks/', views.tasks_index, name='tasks_index'),
  path('photos/', views.photos_index, name='photos_index'),
]