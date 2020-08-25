import {
	GET_ALLLEMPRENDIMIENTOS_START,
    GET_ALLEMPRENDIMIENTOS_ERROR,
    GET_ALLEMPRENDIMIENTOS_COMPLETE,
} from '../actions/emprendimiento';

export default function emprendimiento(
	state = { state: "", array: null }, { type, response }) {
	switch (type) {
		case GET_ALLLEMPRENDIMIENTOS_START:
			return { state: "START", array: [] };
		case  GET_ALLEMPRENDIMIENTOS_ERROR:
			return { state: "ERROR", array: [] };
		case GET_ALLEMPRENDIMIENTOS_COMPLETE:
			return { state: "COMPLETE", array: response.data };

		default:
			return state;
	}
}
