# Generated by Django 3.2.7 on 2021-09-05 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0007_auto_20210905_1901'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='hours',
            field=models.IntegerField(default=0),
        ),
    ]