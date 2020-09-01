import { put, takeEvery, call, takeLatest } from 'redux-saga/effects';
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

import { apiCall } from '../api';
function* getEmprendedor({ idEmprendedor }) {
  try {
    const response = yield call(
      apiCall,
      `/api/emprendedor/${idEmprendedor}`,
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
  try {
    //url, data, headers, method
    const response = yield call(
      apiCall,
      `/api/emprendedor/update/${emprendedor.idEmprendedor}`,
      emprendedor,
      { 'Content-Type': 'application/json' },
      'POST'//POST ES PUT
    );
    yield put({ type: UPDATE_EMPRENDEDOR_COMPLETE, response });
  } catch (err) {
    yield put({ type: UPDATE_EMPRENDEDOR_ERROR });
  }
}
function* deleteEmprendedor({ idEmprendedor }) {
  try {
    //url, data, headers, method
    const response = yield call(
      apiCall,
      `/api/emprendedor/delete/${idEmprendedor}`,
      emprendedor,
      { 'Content-Type': 'application/json' },
      'GET'//GET ES DELETE
    );
    yield put({ type: DELETE_EMPRENDEDOR_COMPLETE, response });
  } catch (err) {
    yield put({ type: DELETE_EMPRENDEDOR_ERROR });
  }
},
function* createEmprendedor(emprendedor) {
  try {
    //url, data, headers, method
    const response = yield call(
      apiCall,
      `/api/emprendedor/update`,
      emprendedor,
      { 'Content-Type': 'application/json' },
      'POST'
    );
    yield put({ type: CREATE_EMPRENDEDOR_COMPLETE, response });
  } catch (err) {
    yield put({ type: CREATE_EMPRENDEDOR_ERROR });
  }
}
//Watcher _START
export default function* teoricos() {
  yield takeEvery(GET_EMPRENDEDOR_START, getEmprendedor);
  yield takeLatest(UPDATE_EMPRENDEDOR_START, updateEmprendedor);
  yield takeLatest(CREATE_EMPRENDEDOR_START, createEmprendedor);
  yield takeLatest(DELETE_EMPRENDEDOR_START, deleteEmprendedor);
}
