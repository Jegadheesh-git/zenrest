# Generated by Django 5.1.1 on 2024-10-17 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiCompetition', '0005_alter_competition_teams'),
    ]

    operations = [
        migrations.AddField(
            model_name='matchtype',
            name='superOverActivePlayersPerTeam',
            field=models.IntegerField(default=2),
        ),
        migrations.AddField(
            model_name='matchtype',
            name='superOverOvers',
            field=models.IntegerField(default=1),
        ),
    ]
