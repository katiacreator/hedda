# Generated by Django 3.2.7 on 2021-09-05 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0006_alter_task_interval'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='interval',
            new_name='hours',
        ),
        migrations.AddField(
            model_name='task',
            name='minutes',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]