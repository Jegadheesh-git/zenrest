# Generated by Django 5.1.1 on 2024-09-23 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiMatch', '0002_remove_playingsquad_competition_playingsquad_captain_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='match',
            name='playingSquadCount',
            field=models.IntegerField(default=0),
        ),
    ]
