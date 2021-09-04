from django.urls import path
from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('about/', views.about, name='about'),
  path('breads/', views.breads_index, name='breads_index'),
  path('bread/<int:bread_id>/', views.breads_detail, name='breads_detail'),
  path('breads/create/', views.BreadCreate.as_view(), name='breads_create'),
  path('breads/<int:pk>/update/', views.BreadUpdate.as_view(), name='breads_update'),
  path('breads/<int:pk>/delete/', views.BreadDelete.as_view(), name='breads_delete'),
  path('tasks/', views.TaskList.as_view(), name='tasks_index'),
  path('tasks/<int:pk>', views.TaskDetail.as_view(), name='tasks_detail'),
  path('tasks/create/', views.TaskCreate.as_view(), name='tasks_create'),
  path('tasks/<int:pk>/update/', views.TaskUpdate.as_view(), name='tasks_update'),
  path('tasks/<int:pk>/delete/', views.TaskDelete.as_view(), name='tasks_delete'),
  # path('breads/<int:bread_id>/add_bread_photo', views.add_bread_photo, name='add_bread_photo'),
  # path('tasks/<int:task_id>/add_task_photo', views.add_task_photo, name='add_task_photo'),
]