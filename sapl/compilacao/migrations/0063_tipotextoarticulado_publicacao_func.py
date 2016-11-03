# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-11-03 11:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('compilacao', '0062_auto_20161101_1221'),
    ]

    operations = [
        migrations.AddField(
            model_name='tipotextoarticulado',
            name='publicacao_func',
            field=models.NullBooleanField(choices=[(True, 'Sim'), (False, 'Não')], default=True, verbose_name='Histórico de Publicação'),
        ),
    ]
