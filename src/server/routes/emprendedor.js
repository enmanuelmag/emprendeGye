var express = require('express');
var router = express.Router();
const emprendedor = require('../models/emprendedor');

//GET
router.get('/', function (req, res, next) {
  emprendedor
    .findAll()
    .then((emprendedor) => {
      if (emprendedor) {
        res.json(emprendedor);
      } else {
        res.send('No existe ningún emprendedor con ese id');
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
  emprendedor
    .findOne({
      where: {
        idEmprendedor: req.params.id,
      },
    })
    .then((emprendedor) => {
      if (emprendedor) {
        res.json(emprendedor);
      } else {
        console.log('No existe ningún emprendedor con ese id');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

//POST
router.post('/', function (req, res, next) {
  console.log('ESTE ES post ', req.body.emprendedor);
  emprendedor
    .create(req.body.emprendedor)
    .then((emprendedor) => {
      if (emprendedor) {
        res.json(emprendedor);
        console.log('Se pudo crear un emprendedor nuevo');
      } else {
        console.log('No se pudo crear emprendedor');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

//PUT
router.post('/update/:id', function (req, res, next) {
  console.log('update ', req.body.emprendedor);
  console.log('params', req.params);
  emprendedor
    .update(req.body.emprendedor, {
      where: {
        idEmprendedor: req.body.emprendedor.idEmprendedor,
      },
    })
    .then((emprendedor) => {
      if (emprendedor) {
        res.json(emprendedor);
        console.log('Se pudo actualizar los datos de emprendedor');
      } else {
        console.log('No se pudo actualizar los datos de emprendedor');
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
  emprendedor
    .destroy({
      where: {
        idEmprendedor: req.params.id,
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
