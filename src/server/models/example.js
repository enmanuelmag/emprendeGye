const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let exampleItem = new Schema(
	{
		_id: {
			type: Object,
		},
		nombre: {
			type: String,
		},
	},
	{
		collection: 'carrera',
	}
);

module.exports = mongoose.model('Carrera', exampleItem);
