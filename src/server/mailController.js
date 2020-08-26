const nodemailer = require('nodemailer'); // email sender function
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

exports.sendEmail = function (req, res) {
  let { email, subject } = req.body;
  console.log(email, subject);

  const readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
      if (err) {
        throw err;
      } else {
        callback(null, html);
      }
    });
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'fantasmitauno040520@gmail.com',
      pass: 'fantasmitauno',
    },
  });

  const path_html = path.join(__dirname, '..', 'templates', 'welcome.html');

  readHTMLFile(path_html, function (err, html) {
    let template = handlebars.compile(html);
    let replacements = {
      username: '!',
    };

    let htmlToSend = template(replacements);

    //Envio para el cliente
    const mailToClient = {
      from: 'EmprendeGye <fantasmitauno040520@gmail.com>',
      to: email,
      subject: 'Gracias por escribirnos',
      html: htmlToSend,
    };
    transporter.sendMail(mailToClient, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email enviando al cliente');
      }
    });

    //Envio para uShop
    const menssageDB = `Asunto de contanto: ${subject}\nCorreo del cliente: ${email}`;
    const mailToBD = {
      from: 'EmprendeGye <fantasmitauno040520@gmail.com>',
      to: 'fmagalla@espol.edu.ec',
      subject: 'Correo de soporte',
      text: menssageDB,
    };
    transporter.sendMail(mailToBD, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email enviando a EmprendeGye');
      }
    });
  });

  res.send({ result: true });
};
