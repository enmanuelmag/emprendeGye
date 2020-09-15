var express = require('express');
var router = express.Router();
const emprendimientoInversionista = require('../models/emprendimientoInversionista');
const emprendimiento = require("../models/emprendimiento");
const inversionista = require("../models/inversionista");
//GET
router.get('/', function (req, res, next) {
  emprendimientoInversionista
    .findAll()
    .then((emprendimientoInversionista) => {
      if (emprendimientoInversionista) {
        //console.log(emprendedor);
        res.json(emprendimientoInversionista);
      } else {
        res.send('No existe ningún emprendimientoInversionista');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

//GET CON ID
router.get('/:idInversionista', function (req, res, next) {
  emprendimientoInversionista
    .findOne({
      where: {
        idInversionista: req.params.idInversionista,
      },
      include: [{
        model: emprendimiento, as: "emprendimiento",
      },
      {
        model: inversionista, as: "inversionista",
      }
      ]
    })
    .then((emprendimiento) => {
      if (emprendimiento) {
        res.json(emprendimiento);
      } else {
        console.log('No existe ningún emprendimiento con ese id');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});


module.exports = router;
