"use strict";

var nodemailer = require('nodemailer'); // email sender function


var handlebars = require('handlebars');

var path = require('path');

var fs = require('fs');

exports.sendEmail = function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      subject = _req$body.subject,
      message = _req$body.message;
  console.log(name);
  name === '*Solo subcrición*' ? name = '!' : name;

  var readHTMLFile = function readHTMLFile(path, callback) {
    fs.readFile(path, {
      encoding: 'utf-8'
    }, function (err, html) {
      if (err) {
        throw err;
      } else {
        callback(null, html);
      }
    });
  };

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'ushop.form@gmail.com',
      pass: 'Enma19624'
    }
  });
  var path_html = path.join(__dirname, '..', 'templates', 'welcome.html');
  readHTMLFile(path_html, function (err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      username: name
    };
    var htmlToSend = template(replacements); //Envio para el cliente

    var mailToClient = {
      from: 'uShop <ushop.form@gmail.com>',
      to: email,
      subject: 'Bienvenido a uShop',
      html: htmlToSend
    };
    transporter.sendMail(mailToClient, function (error, info) {
      if (error) {
        console.log(error);
        res.send(500, error.message);
      } else {
        console.log('Email enviando al cliente');
        res.status(200).jsonp(req.body);
      }
    }); //Envio para uShop

    var menssageDB = "Asunto de contanto: ".concat(subject, "\nNombre del cliente: ").concat(name, "\nCorreo del cliente: ").concat(email, "\n\nMensaje del cliente:\n").concat(message);
    var mailToBD = {
      from: 'ushop.form@gmail.com',
      to: 'fmagalla@espol.edu.ec',
      subject: subject,
      text: menssageDB
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