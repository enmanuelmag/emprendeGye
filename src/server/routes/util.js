var express = require('express');
var router = express.Router();
const db = require("../database/db.js");

router.get('/:user/:password',async function (req, res, next) {
    //console.log(req.params.user, req.params.password);
    let user = req.params.user;
    let pass = req.params.password;
    //SELECT * FROM bj3jjfoucmmohfnsp9ex.emprendedorcuenta WHERE usuario = "${user}" AND contraseña = "${pass}";
    const [results, metadata] = await db.sequelize.query(
      `SELECT * FROM bj3jjfoucmmohfnsp9ex.emprendedorcuenta WHERE usuario = "${user}" AND contraseña = "${pass}"`);
    res.send(results);
  });
  module.exports = router;