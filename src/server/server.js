const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const httpProxy = require('http-proxy');

const app = express();

let mongoose = require('mongoose');
let cors = require('cors');
let database = require('./database/db');

//Rutas de la carpeta routes
const exampleRutas = require('./routes/example.routes');

//CONFIGURACION DEL SERVER

app.use(bodyParser.json());

//Especificamos donde estará la caperta de distribuición
app.use(express.static(path.join(__dirname, '..', '..', 'build')));

app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);

//Especificamos donde estará la caperta de distribuición
app.use(express.static(path.join(__dirname, '..', '..', 'build')));




app.set('port', process.env.PORT || PORT);


//Conexion base de datos
//app.use("/", index);
app.use("/emprendedor", emprendedor);

const PORT = 8080;
app.set('port', process.env.PORT || PORT);

app.use(cors());
app.use('/ruta-de-peticion', exampleRutas);

//Conexcion base de datos
mongoose.Promise = global.Promise;
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
	);

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
