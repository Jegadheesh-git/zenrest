# Generated by Django 5.1.1 on 2024-10-18 11:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiMatch', '0008_match_currentleadingteam_match_currentsuperovercount_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='match',
            name='leadingTeamChoseTo',
            field=models.CharField(default='', max_length=20),
        ),
    ]
