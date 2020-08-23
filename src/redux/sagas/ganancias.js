import { put, takeEvery, call } from 'redux-saga/effects';
import {
    GET_ALLGANANCIAS_START,
    GET_ALLGANANCIAS_ERROR,
    GET_ALLGANANCIAS_COMPLETE,
} from '../actions/ganancias';

import { apiCall } from '../api';
function* getGanancias() {
  try {
    const response = yield call(
        apiCall,
        'https://cors-anywhere.herokuapp.com/https://emprendegye-5fea.restdb.io/rest/ganancias-2',
        null,
        { 'cache-control': 'no-cache',
        'x-apikey': 'a3d2ab335f073808d0a9aa568c3f6460c012d',
         },
         'GET',
    );
    yield put({ type: GET_ALLGANANCIAS_COMPLETE, response });
  } catch (err) {
      console.log(err)
    yield put({ type: GET_ALLGANANCIAS_ERROR });
  }
}

export default function* ganancias() {
  yield takeEvery(GET_ALLGANANCIAS_START, getGanancias);
}
//url, data, headers, method