import {
	GET_ALL_EMPINVERSIONISTA_COMPLETE,
	GET_ALL_EMPINVERSIONISTA_ERROR,
	GET_ALL_EMPINVERSIONISTA_START,
} from '../actions/emprendimientoInversionista';

export default function emprendedor(
	state = { state: "", object: null }, { type, response }) {
	switch (type) {
		case GET_ALL_EMPINVERSIONISTA_START:
			return { state: "GET_START", array: {} };
		case GET_ALL_EMPINVERSIONISTA_ERROR:
			return { state: "GET_ERROR", array: {} };
		case GET_ALL_EMPINVERSIONISTA_COMPLETE:
			return { state: "GET_COMPLETE", array: [...state.array, response.data] };

		default:
			return state;
	}
}
