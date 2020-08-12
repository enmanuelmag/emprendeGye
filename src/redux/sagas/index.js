import { all } from 'redux-saga/effects'
import emprendedor from './emprendedor';

export default function* rootSaga() {
    yield all([emprendedor(),]);
}