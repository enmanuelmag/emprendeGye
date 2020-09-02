const express = require('express');
const path = require('path');
const { sequelize } = require(path.join(__dirname, 'database', 'db'));
const app = express();
let cors = require('cors');
//Rutas de la carpeta routes
var emprendedor = require(path.join(__dirname, 'routes', 'emprendedor'));
var emprendimiento = require(path.join(__dirname, 'routes', 'emprendimiento'));
var emprendimientoStats = require(path.join(__dirname, 'routes', 'emprendimientoStats'));
var emprendedorcuenta = require(path.join(__dirname, 'routes', 'emprendedorcuenta'));
//path.join(__dirname, 'database', 'db')
var emailRoutes = require(path.join(__dirname, 'routes', 'email.routes'));
//var utilRoutes = require(path.join(__dirname, 'routes', 'util'));

//CONEXION CON LA BASE DE DATOS EN CLEVER CLOUD
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully :D');
  })
  .catch((err) => {
    console.error('Unable to connect to the database :(', err);
  });

//CONFIGURACION DEL SERVER
const PORT = 8080;
app.use(express.json());

//Especificamos donde estará la caperta de distribuición
app.use(express.static(path.join(__dirname, '..', '..', 'build')));

app.set('port', process.env.PORT || PORT);

//Conexion base de datos
//app.use("/", index);
app.use('/email', emailRoutes);
app.use('/api/emprendedor', emprendedor);
app.use('/api/emprendimiento', emprendimiento);
app.use('/api/emprendedorcuenta', emprendedorcuenta);
app.use('/api/emprendimientoStats', emprendimientoStats);
//app.use('/api/util', utilRoutes);

app.use(cors());

//Conexcion base de datos
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
  return res.send({ data: 'pong' });
});

/*app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});*/
app.use(express.static(path.join(__dirname, '..', '..', 'build')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', '..', 'build', 'index.html')));

//INICIALIZACION DEL SERVIDOR
app.listen(app.get('port'), () => {
  console.log(`Server funcionando! ${app.get('port')}`);
});
