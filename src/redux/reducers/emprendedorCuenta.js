import {
	GET_EMPCUENTA_START,
	GET_EMPCUENTA_ERROR,
	GET_EMPCUENTA_COMPLETE,

	UPDATE_EMPCUENTA_START,
	UPDATE_EMPCUENTA_ERROR,
	UPDATE_EMPCUENTA_COMPLETE,

	DELETE_EMPCUENTA_START,
	DELETE_EMPCUENTA_ERROR,
	DELETE_EMPCUENTA_COMPLETE,

	CREATE_EMPCUENTA_START,
	CREATE_EMPCUENTA_ERROR,
	CREATE_EMPCUENTA_COMPLETE,
	GET_EMPRENDEDOR_SESION
} from '../actions/emprendedorCuenta';

export default function EMPCUENTA(
	state = { state: "", object: null }, { type, response }) {
	switch (type) {
		case GET_EMPCUENTA_START:
			return { state: "GET_START", object: {} };
		case GET_EMPCUENTA_ERROR:
			return { state: "GET_ERROR", object: {} };
		case GET_EMPCUENTA_COMPLETE:
			return { state: "GET_COMPLETE", object: response.data };

		case UPDATE_EMPCUENTA_START:
			return { state: "UPDATE_START", object: {} };
		case UPDATE_EMPCUENTA_ERROR:
			return { state: "UPDATE_ERROR", object: {} };
		case UPDATE_EMPCUENTA_COMPLETE:
			return { state: "UPDATE_COMPLETE", object: response.data };

		case DELETE_EMPCUENTA_START:
			return { state: "DELETE_START", object: {} };
		case DELETE_EMPCUENTA_ERROR:
			return { state: "DELETE_ERROR", object: {} };
		case DELETE_EMPCUENTA_COMPLETE:
			return { state: "DELETE_COMPLETE", object: {} };

		case CREATE_EMPCUENTA_START:
			return { state: "CREATE_START", object: {} };
		case CREATE_EMPCUENTA_ERROR:
			return { state: "CREATE_ERROR", object: {} };
		case CREATE_EMPCUENTA_COMPLETE:
			return { state: "CREATE_COMPLETE", object: response.data };

		case GET_EMPRENDEDOR_SESION:
			return state;
		default:
			return state;
	}
}
