# 🚀 Backend GoBarber

Projeto desenvolvido no Bootcamp da Rocketseat! Para aplicação de agendamentos de horários com barbeiros, aplicação tanto para barbeiros quanto para seus clientes. Mais sobre a aplicação e suas funcionalidades:

# 🛠 Funcionalidades macros

## Recuperação de senha

**Requisitos Funcionais**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos não Funcionais**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios de produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de negócio**

- O link enviado por e-mail para resetar senha, deve expiarar em 2h;
- O usuário precisa confirmar a nova sernha ao resetar sua senha;

## Atualização de perfil

**Requisitos Funcionais**

- O usuário deve poder atualizar seu nome, email e senha;

**Regras de negócio**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário deve confirmar a nova senha;

## Painel de serviços

**Requisitos Funcionais**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisitos não Funcionais**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser amazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**Regras de negócio**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa contralar;

## Agendamento de serviços

**Requisitos Funcionais**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos não Funcionais**

- A listagem de prestadores deve ser armazenada em cache;

**Regras de negócio**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
