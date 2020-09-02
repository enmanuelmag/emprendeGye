var express = require('express');
var router = express.Router();
const emprendedorcuenta = require('../models/emprendedorcuenta');

//GET
router.post('/valid', function (req, res, next) {
  console.log("body", req.body)
  emprendedorcuenta
    .findOne({
      where: {
        usuario:  req.body['usuario'],
        contraseña: req.body['contraseña']
      },
    })
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

//GET CON ID
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


//POST
router.post('/', function (req, res, next) {
  console.log('post ', req.body);
  emprendedorcuenta
    .create(req.body)
    .then((emprendedorcuenta) => {
      if (emprendedorcuenta) {
        res.json(emprendedorcuenta);
        console.log('Se pudo crear una cuenta de emprendedor nueva');
      } else {
        console.log('No se pudo crear la cuenta');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

//PUT
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

//DELETE
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
