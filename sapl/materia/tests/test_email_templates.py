from django.core import mail

from sapl.base.email_utils import enviar_emails, load_email_templates


def test_email_template_loading():
    expected = "<html><body>Hello Django</body></html>"
    emails = load_email_templates(['email/test_tramitacao.html'],
                                  context={"name": "Django"})

    # strip \n and \r to compare with expected
    actual = emails[0].replace('\n', '').replace('\r', '')

    assert actual == expected


def test_html_email_body_with_materia():
    templates = load_email_templates(['email/tramitacao.txt',
                                      'email/tramitacao.html'],
                                     {"image": 'img/logo.png',
                                      "casa_legislativa":
                                         "Assembléia Parlamentar",
                                      "data_registro": "25/02/2016",
                                      "cod_materia": "1",
                                      "descricao_materia": "Ementa de teste",
                                      "autoria": ["Autor1", "Autor2"],
                                      "data": "25/02/2016",
                                      "status": "Arquivado",
                                      "texto_acao": "Deliberado",
                                      "hash_txt": "abc01f",
                                      "materia_id": "794",
                                      "base_url": "http://localhost:8000",
                                      "materia_url":
                                         "/materia/764/acompanhar-materia",
                                      "excluir_url":
                                         "/materia/764/acompanhar-excluir"})

    assert len(templates) == 2


def test_enviar_email_distintos():
    NUM_MESSAGES = 10
    messages = [{'recipient': 'user-' + str(i) + '@test.com',
                 'subject': 'subject: ' + str(i),
                 'txt_message': 'txt: ' + str(i),
                 'html_message': '<html></html>',
                 } for i in range(NUM_MESSAGES)]

    recipients = [m['recipient'] for m in messages]

    enviar_emails('test@sapl.com', recipients, messages)
    assert len(mail.outbox) == NUM_MESSAGES


def test_enviar_same_email():
    NUM_MESSAGES = 10
    messages = [{'recipient': 'user-' + str(i) + '@test.com',
                 'subject': 'subject: ' + str(i),
                 'txt_message': 'txt: ' + str(i),
                 'html_message': '<html></html>',
                 } for i in range(NUM_MESSAGES)]

    recipients = [m['recipient'] for m in messages]

    enviar_emails('test@sapl.com', recipients, [messages[0]])
    assert len(mail.outbox) == 1
