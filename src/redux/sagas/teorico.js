import { put, takeEvery, call } from 'redux-saga/effects';
import {
	GET_EMPRENDEDOR_START,
	GET_EMPRENDEDOR_ERROR,
	GET_EMPRENDEDOR_COMPLETE,

	UPDATE_EMPRENDEDOR_START,
	UPDATE_EMPRENDEDOR_ERROR,
	UPDATE_EMPRENDEDOR_COMPLETE,
} from '../actions/emprendedor';

import { apiCall } from '../api';
function* getEmprendedor({ idEmprendedor }) {
	//yield put({ type: GET_EMPRENDEDOR_START });
	try {
		const response = yield call(
			apiCall,
			`/emprendedor/${idEmprendedor}`,
			null,
			null,
			'GET'
		);
		yield put({ type: GET_EMPRENDEDOR_COMPLETE, response });
	} catch (err) {
		yield put({ type: GET_EMPRENDEDOR_ERROR });
	}
}
function* updateEmprendedor(emprendedor) {
	//yield put({ type: UPDATE_EMPRENDEDOR_START });
	try {
		//url, data, headers, method
		const response = yield call(
			apiCall,
			`/emprendedor/update`,
			JSON.stringify(emprendedor),
			{ 'Content-Type': 'application/json' },
			'UPDATE'
		);
		yield put({ type: UPDATE_EMPRENDEDOR_COMPLETE, response });
	} catch (err) {
		yield put({ type: UPDATE_EMPRENDEDOR_ERROR });
	}
}
//Watcher _START
export default function* teoricos() {
	yield takeEvery(GET_EMPRENDEDOR_START, getEmprendedor);
	yield takeEvery(UPDATE_EMPRENDEDOR_START, updateEmprendedor);
}
