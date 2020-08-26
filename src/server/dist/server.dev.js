"use strict";

var express = require('express');

var path = require('path');

var _require = require('./database/db'),
    sequelize = _require.sequelize;

var app = express();

var mongoose = require('mongoose');

var cors = require('cors');

var database = require('./database/db'); //Rutas de la carpeta routes


var emprendedor = require('./routes/emprendedor');

var emprendimiento = require('./routes/emprendimiento');

var emprendimientoStats = require('./routes/emprendimientoStats');

var emprendedorcuenta = require('./routes/emprendedorcuenta');

var emailRoutes = require(path.join(__dirname, 'routes', 'email.routes')); //CONEXION CON LA BASE DE DATOS EN CLEVER CLOUD


sequelize.authenticate().then(function () {
  console.log('Connection has been established successfully :D');
})["catch"](function (err) {
  console.error('Unable to connect to the database :(', err);
}); //CONFIGURACION DEL SERVER

var PORT = 8080;
app.use(express.json()); //Especificamos donde estará la caperta de distribuición

app.use(express["static"](path.join(__dirname, '..', '..', 'build')));
app.set('port', process.env.PORT || PORT); //Conexion base de datos
//app.use("/", index);

app.use('/email', emailRoutes);
app.use('/emprendedor', emprendedor);
app.use('/emprendimiento', emprendimiento);
app.use('/emprendedorcuenta', emprendedorcuenta);
app.use('/emprendimientoStats', emprendimientoStats);
app.use(cors()); //Conexcion base de datos

/* mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useUnifiedTopology: true,
    dbName: 'heroku_28zqn5s2',
  })
  .then(
    (p) => {
      console.log('Database connected sucessfully !');
    },
    (error) => {
      console.log('Database could not be connected : ' + error);
    }
  ); */
//Rutas genericas

app.get('/ping', function (req, res) {
  console.log('Hola!');
  return res.send({
    data: 'pong'
  });
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
}); //INICIALIZACION DEL SERVIDOR

app.listen(app.get('port'), function () {
  console.log("Server funcionando! ".concat(app.get('port')));
});