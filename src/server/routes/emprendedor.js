var express = require("express");
var router = express.Router();
const emprendedor = require("../models/emprendedor");

router.get("/", function(req, res, next) {
    emprendedor.findAll().then( emprendedor => {
        if(emprendedor){
            //console.log(emprendedor);
            res.json(emprendedor);
        }else{
        res.send("No existe ningún emprendedor con ese id");}
    }).catch(err => {
        res.send("Error: " + err);
    })
})

router.get("/:id", function(req, res, next) {
    emprendedor.findOne({
        where: {
            idEmprendedor: req.params.id
        }
    }).then( emprendedor => {
        if(emprendedor){
            res.json(emprendedor);
        }else{
            console.log("No existe ningún emprendedor con ese id");
                  }
    }).catch(err => {
        res.send("Error: " + err);
    })
})
/*
app.put('/generar', function (req, res) {
	console.log('Generando horarios');

	if (typeof req.body !== 'undefined') {
		const paquetes = req.body;
		//console.log(paquetes);
		const castFunction = (paquete) => {
			return { paquete: paquete };
		}; //Necesaria debido a falencas de clase set es6

		const paquetesObj = paquetes.map(castFunction);

		const generador = new Generador(paquetesObj);

		//console.log(generador.HorariosGenerados.map((horario) => horario.materias));//horario es una obj de clase

		res.send(generador.HorariosGenerados.map((horario) => horario.materias));
	} else {
		res.send([null]);
	}
});
*/ 
router.update("/update", function(req, res, next) {
    emprendedor.update(req.body).then(emprendedor =>{
        if(emprendedor){
            res.json(emprendedor);
        }else{
            console.log("No se pudo actualizar los datos de emprendedor");
                  }
    }).catch(err => {
        res.send("Error: " + err);
    })
})

module.exports = router;