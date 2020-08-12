import {
	GET_EMPRENDEDOR_START,
	GET_EMPRENDEDOR_ERROR,
	GET_EMPRENDEDOR_COMPLETE,

	UPDATE_EMPRENDEDOR_START,
	UPDATE_EMPRENDEDOR_ERROR,
	UPDATE_EMPRENDEDOR_COMPLETE,
} from '../actions/emprendedor';

export default function emprendedor(
	state = { state: "", object: null }, { type, response }) {
	switch (type) {
		case GET_EMPRENDEDOR_START:
			return { state: "START", object: {} };
		case GET_EMPRENDEDOR_ERROR:
			return { state: "ERROR", object: {} };
		case GET_EMPRENDEDOR_COMPLETE:
			return { state: "COMPLETE", object: response.data };

		case UPDATE_EMPRENDEDOR_START:
			return { state: "START", object: {} };
		case UPDATE_EMPRENDEDOR_ERROR:
			return { state: "ERROR", object: {} };
		case UPDATE_EMPRENDEDOR_COMPLETE:
			return { state: "COMPLETE", object: response.data };
		default:
			return state;
	}
}
