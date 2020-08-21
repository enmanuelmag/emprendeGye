var express = require('express');
var router = express.Router();
const emprendimientoStats = require('../models/emprendimientoStats');

router.get('/', function (req, res, next) {
  emprendimientoStats
    .findAll()
    .then((emprendimientoStats) => {
      if (emprendimientoStats) {
        res.json(emprendimientoStats);
      } else {
        res.send('No existe ningún emprendimientoStats con ese id');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

router.get('/:id', function (req, res, next) {
  emprendimientoStats
    .findOne({
      where: {
        idEmprendimientoStats: req.params.id,
      },
    })
    .then((emprendimientoStats) => {
      if (emprendimientoStats) {
        res.json(emprendimientoStats);
      } else {
        console.log('No existe ningún emprendimientoStats con ese id');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

router.post('/update', function (req, res, next) {
  console.log('Actualizando ', typeof req.body);
  emprendimientoStats
    .update(req.body)
    .then((emprendimientoStats) => {
      if (emprendimientoStats) {
        res.json(emprendimientoStats);
      } else {
        console.log('No se pudo actualizar los datos de emprendimientoStats');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

router.delete('/delete/:id', function (req, res, next) {
  console.log('Actualizando ', typeof req.body);

  emprendimientoStats
    .destroy({
      where: {
        idEmprendimientoStats: req.params.id,
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

  emprendimientoStats
    .update(req.body)
    .then((emprendimientoStats) => {
      if (emprendimientoStats) {
        res.json(emprendimientoStats);
      } else {
        console.log('No se pudo actualizar los datos de emprendimientoStats');
      }
    })
    .catch((err) => {
      res.send('Error: ' + err);
    });
});

module.exports = router;
