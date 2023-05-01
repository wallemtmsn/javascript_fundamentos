// Rodar um serviço de envio de email

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

app.post('/api/email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.live.com',
      port: 465,
      secure: false,
      auth: {
        user: 'wallemtmsn@hotmail.com', //coloque seu e-mail
        pass: '234234' //coloque sua senha
      }
    });

    const info = await transporter.sendMail({
      from: 'wallemtmsn@hotmail.com', //coloque seu e-mail
      to: 'xheadshot@hotmail.com',
      subject: 'Teste NodeJS',
      text: 'Mensagem de exemplo'
    });

    res.send(info);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// Fim da aplicação