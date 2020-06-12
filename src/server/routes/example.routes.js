let mongoose = require('mongoose'),
	express = require('express'),
	router = express.Router();

let model = require('../models/example');

router.route('/').get((req, res) => {
	/*Consulta todos los items de la coleccion example*/
	model.find((error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
});

module.exports = router;
