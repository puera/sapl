# Generated by Django 2.2.13 on 2020-09-02 16:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('materia', '0071_auto_20200609_1503'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='materialegislativa',
            options={'ordering': ['-ano', 'tipo', 'numero'], 'permissions': (('can_access_impressos', 'Can access impressos'),), 'verbose_name': 'Matéria Legislativa', 'verbose_name_plural': 'Matérias Legislativas'},
        ),
    ]
