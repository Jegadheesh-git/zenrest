# Generated by Django 5.1.1 on 2024-11-24 05:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiBall', '0009_ball_isboundary'),
    ]

    operations = [
        migrations.AddField(
            model_name='ball',
            name='ballNumber',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
