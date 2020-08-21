var express = require('express');
var router = express.Router();
const inversionista = require('../models/inversionista');

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

router.get('/:id', function (req, res, next) {
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

router.post('/update', function (req, res, next) {
  console.log('Actualizando ', typeof req.body);
  inversionista
    .update(req.body)
    .then((inversionista) => {
      if (inversionista) {
        res.json(inversionista);
      } else {
        console.log('No se pudo actualizar los datos del inversionista');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

router.delete('/delete/:id', function (req, res, next) {
  console.log('Actualizando ', typeof req.body);

  inversionista
    .destroy({
      where: {
        idInversionista: req.params.id,
      },
    })
    .then((rowsDeleted) => {
      if (rowsDeleted === 1) {
        console.log('Dato único eliminado correctamente');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });

  inversionista
    .update(req.body)
    .then((inversionista) => {
      if (inversionista) {
        res.json(inversionista);
      } else {
        console.log('No se pudo actualizar los datos de inversionista');
      }
    })
    .catch((err) => {
      res.send('Error: ' + err);
    });
});

module.exports = router;
