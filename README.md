# WhatsApp API Integration

Esta é uma API de integração com o WhatsApp usando Node.js e Express, utilizando a API do Twilio.

## Configuração

### Pré-requisitos

- Node.js e npm instalados
- Conta no Twilio e número de telefone configurado para WhatsApp

### Instalação

1. Clone o repositório:
    git clone https://github.com/tarcisiosilva/whatsapp.git
    cd whatsapp

2. Instale as dependências:

    npm install

3. Crie um arquivo `.env` com suas credenciais do Twilio:


    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_PHONE_NUMBER=your_twilio_phone_number


### Uso

1. Inicie o servidor:


    node index.js


2. Envie uma mensagem usando a API:

    Faça uma requisição POST para `http://localhost:3000/send-message` com o seguinte corpo:


    {
        "message": "Olá, esta é uma mensagem de teste!",
        "to": "whatsapp:+5511999999999"
    }


3. Configure o webhook no Twilio para receber mensagens no endpoint `/webhook`.


