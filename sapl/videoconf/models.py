from django.utils import timezone

from django.db import models
from django.utils.translation import ugettext_lazy as _

from sapl.utils import get_settings_auth_user_model


def gen_session_id():

    from random import choice
    return ''.join([str(choice(range(10))) for _ in range(25)])


class Videoconferencia(models.Model):

    chat_id = models.CharField(max_length=100,
                               default=gen_session_id,
                               verbose_name=_('Chat ID'))
    titulo = models.CharField(max_length=100, verbose_name=_('Título'))
    descricao = models.CharField(max_length=256, blank=True,
                                 verbose_name=_('Descrição'))
    inicio = models.DateTimeField(auto_now=timezone.now, verbose_name=_('Data e Hora de Início'))

    #TODO: preencher quando usuário selecionar a opção 'finalizada'
    termino = models.DateTimeField(blank=True, null=True,
                                   verbose_name=_('Data e Hora de Término'))
    finalizada = models.BooleanField(default=False, verbose_name=_('Finalizada?'))

    #TODO: obrigatório com preenchimento automatico
    created_by = models.ForeignKey(get_settings_auth_user_model(),
                                   blank=True, null=True,
                                   verbose_name=_('Criado por'))

    class Meta:
        verbose_name = _('Videoconferência')
        verbose_name_plural = _('Videoconferências')
        ordering = ['chat_id', 'descricao']

    def __str__(self):
        return "".format(self.chat_id)
