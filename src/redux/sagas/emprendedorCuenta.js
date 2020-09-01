import { put, takeEvery, call, takeLatest } from 'redux-saga/effects';
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
	CREATE_EMPCUENTA_COMPLETE
} from '../actions/emprendedorCuenta';

import { apiCall } from '../api';
function* getEmprendedorCuenta({ idEmprendedorCuenta }) {
  try {
    const response = yield call(
      apiCall,
      `/api/emprendedorcuenta/${idEmprendedorCuenta}`,
      null,
      null,
      'GET'
    );
    yield put({ type: GET_EMPCUENTA_COMPLETE, response });
  } catch (err) {
    yield put({ type: GET_EMPCUENTA_ERROR });
  }
}
function* updateEmprendedorCuenta(emprendedorCuenta) {
  try {
    //url, data, headers, method
    const response = yield call(
      apiCall,
      `/api/emprendedorcuenta/update/${emprendedorCuenta.idEmprendedor}`,
      emprendedorCuenta,
      { 'Content-Type': 'application/json' },
      'POST'//POST ES PUT
    );
    yield put({ type: UPDATE_EMPCUENTA_COMPLETE, response });
  } catch (err) {
    yield put({ type: UPDATE_EMPCUENTA_ERROR });
  }
}
function* deleteEmprendedorCuenta({ idEmprendedorCuenta }) {
  try {
    //url, data, headers, method
    const response = yield call(
      apiCall,
      `/api/emprendedorcuenta/delete/${idEmprendedorCuenta}`,
      idEmprendedorCuenta,
      { 'Content-Type': 'application/json' },
      'GET'//GET ES DELETE
    );
    yield put({ type: DELETE_EMPCUENTA_COMPLETE, response });
  } catch (err) {
    yield put({ type: DELETE_EMPCUENTA_ERROR });
  }
},
function* createEmprendedorCuenta(emprendedorCuenta) {
  try {
    //url, data, headers, method
    const response = yield call(
      apiCall,
      `/api/emprendedorcuenta/update`,
      emprendedorCuenta,
      { 'Content-Type': 'application/json' },
      'POST'
    );
    yield put({ type: CREATE_EMPCUENTA_COMPLETE, response });
  } catch (err) {
    yield put({ type: CREATE_EMPCUENTA_ERROR });
  }
}
//Watcher _START
export default function* teoricos() {
  yield takeEvery(GET_EMPCUENTA_START, getEmprendedorCuenta);
  yield takeLatest(UPDATE_EMPCUENTA_START, updateEmprendedorCuenta);
  yield takeLatest(CREATE_EMPCUENTA_START, createEmprendedorCuenta);
  yield takeLatest(DELETE_EMPCUENTA_START, deleteEmprendedorCuenta);
}
