# Generated by Django 3.2.7 on 2021-09-04 19:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0003_photo_task'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bread',
            name='tasks',
        ),
        migrations.RemoveField(
            model_name='bread',
            name='user',
        ),
        migrations.RemoveField(
            model_name='task',
            name='user',
        ),
        migrations.AlterField(
            model_name='bread',
            name='description',
            field=models.TextField(max_length=250),
        ),
    ]