var express = require('express');
var router = express.Router();
const inversionista = require('../models/inversionista');

//GET
router.get('/', function (req, res, next) {
  inversionista
    .findAll()
    .then((inversionista) => {
      if (inversionista) {
        res.json(inversionista);
      } else {
        res.send('No existe ningún inversionista con ese id');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

//GET CON ID
router.get('/:id', function (req, res, next) {
  console.log("body", req.params.id)
  inversionista
    .findOne({
      where: {
        idInversionista: req.params.id,
      },
    })
    .then((inversionista) => {
      if (inversionista) {
        res.json(inversionista);
      } else {
        console.log('No existe ningún inversionista con ese id');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

module.exports = router;
