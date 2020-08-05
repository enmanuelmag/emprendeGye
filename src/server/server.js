const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//const httpProxy = require('http-proxy');
//var index = require("./routes/index");
var emprendedor = require("./routes/emprendedor");

const PORT = 8080;
const app = express();

let cors = require('cors');

app.use(cors());
//CONFIGURACION DEL SERVER

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
//Especificamos donde estará la caperta de distribuición
app.use(express.static(path.join(__dirname, '..', '..', 'build')));




app.set('port', process.env.PORT || PORT);


//Conexcion base de datos
//app.use("/", index);
app.use("/emprendedor", emprendedor);

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
