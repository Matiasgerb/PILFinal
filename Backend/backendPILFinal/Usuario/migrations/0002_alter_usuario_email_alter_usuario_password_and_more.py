# Generated by Django 4.1.4 on 2022-12-09 07:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Usuario', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='email',
            field=models.CharField(max_length=60),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='password',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='token',
            field=models.CharField(max_length=30, unique=True),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='userName',
            field=models.CharField(max_length=20),
        ),
    ]
