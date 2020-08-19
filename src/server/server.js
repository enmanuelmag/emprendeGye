const express = require('express');
const path = require('path');

const { sequelize } = require('./database/db');

const app = express();

let mongoose = require('mongoose');
let cors = require('cors');
let database = require('./database/db');

//Rutas de la carpeta routes
var emprendedor = require('./routes/emprendedor');

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
app.use('/emprendedor', emprendedor);

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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});

//INICIALIZACION DEL SERVIDOR
app.listen(app.get('port'), () => {
  console.log(`Server funcionando! ${app.get('port')}`);
});
