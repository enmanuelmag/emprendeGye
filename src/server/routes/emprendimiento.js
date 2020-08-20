var express = require('express');
var router = express.Router();
const emprendimiento = require('../models/emprendimiento');


router.get('/', function (req, res, next) {
  emprendimiento
    .findAll()
    .then((emprendimiento) => {
      if (emprendimiento) {
        //console.log(emprendedor);
        res.json(emprendimiento);
      } else {
        res.send('No existe ningún emprendimiento');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

/*
router.get('/:id', function (req, res, next) {
  emprendimiento
    .findOne({
      where: {
        idEmprendimiento: req.params.id,
      },
    })
    .then((emprendimiento) => {
      if (emprendimiento) {
        res.json(emprendimiento);
      } else {
        console.log('No existe ningún emprendedor con ese id');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});
*/
module.exports = router;
