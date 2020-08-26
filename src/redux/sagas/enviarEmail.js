import { put, takeEvery, call, takeLatest } from 'redux-saga/effects';
import {
  SEND_EMAIL_COMPLETE,
  SEND_EMAIL_ERROR,
  SEND_EMAIL_START,
} from '../actions/enviarEmail';

import { apiCall } from '../api';
function* sendEmail(actionData) {
  try {
    console.log('En saga');
    console.log(actionData.data);
    const response = yield call(
      apiCall,
      `/email/send`,
      actionData.data,
      null,
      'POST'
    );
    yield put({ type: SEND_EMAIL_COMPLETE, response });
  } catch (err) {
    yield put({ type: SEND_EMAIL_ERROR });
  }
}

//Watcher _START
export default function* teoricos() {
  yield takeEvery(SEND_EMAIL_START, sendEmail);
}
