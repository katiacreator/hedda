from django.urls import path
from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('about/', views.about, name='about'),
  path('breads/', views.breads_index, name='breads_index'),
  path('bread/<int:bread_id>/', views.breads_detail, name='breads_detail'),
  path('breads/create/', views.BreadCreate.as_view(), name='breads_create'),
  # path('tasks/', views.tasks_index, name='tasks_index'),
  # path('photos/', views.photos_index, name='photos_index'),
]