import {
	GET_EMPRENDEDOR_START,
	GET_EMPRENDEDOR_ERROR,
	GET_EMPRENDEDOR_COMPLETE,

	UPDATE_EMPRENDEDOR_START,
	UPDATE_EMPRENDEDOR_ERROR,
	UPDATE_EMPRENDEDOR_COMPLETE,

	DELETE_EMPRENDEDOR_START,
	DELETE_EMPRENDEDOR_ERROR,
	DELETE_EMPRENDEDOR_COMPLETE,

	CREATE_EMPRENDEDOR_START,
	CREATE_EMPRENDEDOR_ERROR,
	CREATE_EMPRENDEDOR_COMPLETE
} from '../actions/emprendedor';

export default function emprendedor(
	state = { state: "", object: null }, { type, response }) {
	switch (type) {
		case GET_EMPRENDEDOR_START:
			return { state: "GET_START", object: {} };
		case GET_EMPRENDEDOR_ERROR:
			return { state: "GET_ERROR", object: {} };
		case GET_EMPRENDEDOR_COMPLETE:
			return { state: "GET_COMPLETE", object: response.data };

		case UPDATE_EMPRENDEDOR_START:
			return { state: "UPDATE_START", object: {} };
		case UPDATE_EMPRENDEDOR_ERROR:
			return { state: "UPDATE_ERROR", object: {} };
		case UPDATE_EMPRENDEDOR_COMPLETE:
			return { state: "UPDATE_COMPLETE", object: response.data };

		case DELETE_EMPRENDEDOR_START:
			return { state: "DELETE_START", object: {} };
		case DELETE_EMPRENDEDOR_ERROR:
			return { state: "DELETE_ERROR", object: {} };
		case DELETE_EMPRENDEDOR_COMPLETE:
			return { state: "DELETE_COMPLETE", object: {} };

		case CREATE_EMPRENDEDOR_START:
			return { state: "CREATE_START", object: {} };
		case CREATE_EMPRENDEDOR_ERROR:
			return { state: "CREATE_ERROR", object: {} };
		case CREATE_EMPRENDEDOR_COMPLETE:
            console.log(response);
            return { state: "CREATE_COMPLETE", object: response.data };
		default:
			return state;
	}
}
