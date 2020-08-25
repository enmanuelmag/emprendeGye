const nodemailer = require('nodemailer'); // email sender function
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

exports.sendEmail = function (req, res) {
  let { name, email, subject, message } = req.body;
  console.log(name);

  name === '*Solo subcrición*' ? (name = '!') : name;

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
      user: 'ushop.form@gmail.com',
      pass: 'Enma19624',
    },
  });

  const path_html = path.join(__dirname, '..', 'templates', 'welcome.html');

  readHTMLFile(path_html, function (err, html) {
    let template = handlebars.compile(html);
    let replacements = {
      username: name,
    };

    let htmlToSend = template(replacements);

    //Envio para el cliente
    const mailToClient = {
      from: 'uShop <ushop.form@gmail.com>',
      to: email,
      subject: 'Bienvenido a uShop',
      html: htmlToSend,
    };
    transporter.sendMail(mailToClient, function (error, info) {
      if (error) {
        console.log(error);
        res.send(500, error.message);
      } else {
        console.log('Email enviando al cliente');
        res.status(200).jsonp(req.body);
      }
    });

    //Envio para uShop
    const menssageDB = `Asunto de contanto: ${subject}\nNombre del cliente: ${name}\nCorreo del cliente: ${email}\n\nMensaje del cliente:\n${message}`;
    const mailToBD = {
      from: 'ushop.form@gmail.com',
      to: 'fmagalla@espol.edu.ec',
      subject: subject,
      text: menssageDB,
    };
    transporter.sendMail(mailToBD, function (error, info) {
      if (error) {
        console.log(error);
        res.send(500, error.message);
      } else {
        console.log('Email enviando a uShop');
        res.status(200).jsonp(req.body);
      }
    });
  });
};
