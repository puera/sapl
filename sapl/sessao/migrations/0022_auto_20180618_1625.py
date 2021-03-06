# -*- coding: utf-8 -*-
# Generated by Django 1.9.13 on 2018-06-18 19:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sessao', '0021_auto_20180417_1209'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expedientemateria',
            name='tipo_votacao',
            field=models.PositiveIntegerField(choices=[(1, 'Simbólica'), (2, 'Nominal'), (3, 'Secreta')], default=1, verbose_name='Tipo de votação'),
        ),
        migrations.AlterField(
            model_name='ordemdia',
            name='tipo_votacao',
            field=models.PositiveIntegerField(choices=[(1, 'Simbólica'), (2, 'Nominal'), (3, 'Secreta')], default=1, verbose_name='Tipo de votação'),
        ),
    ]
