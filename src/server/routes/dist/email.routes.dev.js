"use strict";

var express = require('express');

var router = express.Router();

var path = require('path');

var emailCtrl = require(path.join(__dirname, '..', 'mailController'));

router.post('/send', function (req, res) {
  emailCtrl.sendEmail(req, res);
});
module.exports = router;