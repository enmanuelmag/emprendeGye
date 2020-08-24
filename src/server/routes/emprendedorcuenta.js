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

router.post('/update/:id', function (req, res, next) {
  console.log('update ', req.body);
  emprendedorcuenta
    .update(req.body, {
      where: {
        idEmprendedorCuenta: req.params.id,
      },
    })
    .then((emprendedorcuenta) => {
      if (emprendedorcuenta) {
        res.json(emprendedorcuenta);
        console.log('Se pudo actualizar los datos');
      } else {
        console.log('No se pudo actualizar los datos');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

router.get('/delete/:id', function (req, res, next) {
  console.log('Borrando ', req.body);
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
});

module.exports = router;
