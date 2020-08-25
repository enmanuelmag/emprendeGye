const express = require('express');
const router = express.Router();
const path = require('path');

const emailCtrl = require(path.join(
  __dirname,
  '..',
  'server',
  'mailController'
));

router.post('/send', function (req, res) {
  emailCtrl.sendEmail(req, res);
});

module.exports = router;
