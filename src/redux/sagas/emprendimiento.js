import { put, takeEvery, call, takeLatest } from 'redux-saga/effects';
import {
  GET_ALLLEMPRENDIMIENTOS_START,
  GET_ALLEMPRENDIMIENTOS_ERROR,
  GET_ALLEMPRENDIMIENTOS_COMPLETE,
} from '../actions/emprendimiento';

import { apiCall } from '../api';
function* getEmprendimiento() {
  try {
    const response = yield call(
      apiCall,
      `/api/emprendimiento/`,
      null,
      null,
      'GET'
    );
    yield put({ type: GET_ALLEMPRENDIMIENTOS_COMPLETE, response });
  } catch (err) {
    yield put({ type: GET_ALLEMPRENDIMIENTOS_ERROR });
  }
}

export default function* teoricos() {
  yield takeEvery(GET_ALLLEMPRENDIMIENTOS_START, getEmprendimiento);
}
