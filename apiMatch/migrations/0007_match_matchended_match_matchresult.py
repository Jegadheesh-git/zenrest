# Generated by Django 5.1.1 on 2024-10-10 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiMatch', '0006_match_currentinnings'),
    ]

    operations = [
        migrations.AddField(
            model_name='match',
            name='matchEnded',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='match',
            name='matchResult',
            field=models.CharField(default='', max_length=50),
        ),
    ]
