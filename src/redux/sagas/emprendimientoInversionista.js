import { put, takeEvery, call } from 'redux-saga/effects';
import {
	GET_ALL_EMPINVERSIONISTA_COMPLETE,
	GET_ALL_EMPINVERSIONISTA_ERROR,
	GET_ALL_EMPINVERSIONISTA_START,
} from '../actions/emprendimientoInversionista';

import { apiCall } from '../api';
function* getEmprendedor({ idInversionista }) {
  try {
    const response = yield call(
      apiCall,
      `/api/emprendimientoInversionista/${idInversionista}`,
      null,
      null,
      'GET'
    );
    yield put({ type: GET_ALL_EMPINVERSIONISTA_COMPLETE, response });
  } catch (err) {
    yield put({ type: GET_ALL_EMPINVERSIONISTA_ERROR });
  }
}
//Watcher _START
export default function* teoricos() {
  yield takeEvery(GET_ALL_EMPINVERSIONISTA_START, getEmprendedor);
}
