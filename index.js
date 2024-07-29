const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Endpoint para enviar mensagens
app.post('/send-message', (req, res) => {
    const { message, to } = req.body;

    client.messages
        .create({
            body: message,
            from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
            to: `whatsapp:${to}`
        })
        .then(message => res.status(200).json({ success: true, messageSid: message.sid }))
        .catch(error => res.status(500).json({ success: false, error: error.message }));
});

// Endpoint para receber mensagens
app.post('/webhook', (req, res) => {
    const { Body, From } = req.body;
    console.log(`Mensagem recebida de ${From}: ${Body}`);

    res.status(200).send('<Response></Response>');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
