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

router.post('/update/:id', function (req, res, next) {
  console.log('update ', req.body);
  emprendimientoStats
    .update(req.body, {
      where: {
        idEmprendimientoStats: req.params.id,
      },
    })
    .then((emprendimientoStats) => {
      if (emprendimientoStats) {
        res.json(emprendimientoStats);
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
});
module.exports = router;
