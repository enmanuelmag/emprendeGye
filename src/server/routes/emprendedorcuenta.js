var express = require('express');
var router = express.Router();
const emprendedorcuenta = require('../models/emprendedorcuenta');

router.get('/', function (req, res, next) {
  emprendedorcuenta
    .findAll()
    .then((emprendedorcuenta) => {
      if (emprendedorcuenta) {
        res.json(emprendedorcuenta);
      } else {
        res.send('No existe ningún emprendedor');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

router.get('/:id', function (req, res, next) {
  emprendedorcuenta
    .findOne({
      where: {
        idEmprendedorCuenta: req.params.id,
      },
    })
    .then((emprendedorcuenta) => {
      if (emprendedorcuenta) {
        res.json(emprendedorcuenta);
      } else {
        console.log('No existe ninguna cuenta de emprendedor con ese id');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

router.post('/update', function (req, res, next) {
  console.log('Actualizando ', typeof req.body);
  emprendedorcuenta
    .update(req.body)
    .then((emprendedorcuenta) => {
      if (emprendedorcuenta) {
        res.json(emprendedorcuenta);
      } else {
        console.log('No se pudo actualizar de la cuenta del emprendedor');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

router.delete('/delete/:id', function (req, res, next) {
  console.log('Actualizando ', typeof req.body);

  emprendedorcuenta
    .destroy({
      where: {
        idEmprendedorCuenta: req.params.id,
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

  emprendedorcuenta
    .update(req.body)
    .then((emprendedorcuenta) => {
      if (emprendedorcuenta) {
        res.json(emprendedorcuenta);
      } else {
        console.log('No se pudo actualizar los datos de la cuenta del emprendedor');
      }
    })
    .catch((err) => {
      res.send('Error: ' + err);
    });
});

module.exports = router;
