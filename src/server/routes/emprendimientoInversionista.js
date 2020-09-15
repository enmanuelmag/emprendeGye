var express = require('express');
var router = express.Router();
const emprendimientoInversionista = require('../models/emprendimientoInversionista');
const emprendimiento = require("../models/emprendimiento");
const inversionista = require("../models/inversionista");
//GET
router.get('/', function (req, res, next) {
  emprendimientoInversionista
    .findAll({
      include: [
        {
        model: emprendimiento, as: "emprendimiento",
      },
      {
        model: inversionista, as: "inversionista",
      }
      ]
    })
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
    .findAll({
      where: {
        idInversionista: req.params.idInversionista,
      },
      include: [
        {
        model: emprendimiento, as: "emprendimiento",
      },
      {
        model: inversionista, as: "inversionista",
      }
      ]
    })
    .then((emprendimientoInversionista) => {
      if (emprendimientoInversionista) {
        res.json(emprendimientoInversionista);
      } else {
        console.log('No existe ningún emprendimientoInversionista con ese idInversionista');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});


module.exports = router;
