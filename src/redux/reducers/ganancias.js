import {
	GET_ALLGANANCIAS_START,
    GET_ALLGANANCIAS_ERROR,
    GET_ALLGANANCIAS_COMPLETE,
} from '../actions/ganancias';

export default function emprendimiento(
	state = { state: "", array: null }, { type, response }) {
	switch (type) {
		case GET_ALLGANANCIAS_START:
			return { state: "START", array: [] };
		case  GET_ALLGANANCIAS_ERROR:
			return { state: "ERROR", array: [] };
		case GET_ALLGANANCIAS_COMPLETE:
			return { state: "COMPLETE", array: response.data };

		default:
			return state;
	}
}
