import { all } from 'redux-saga/effects'
import emprendedor from './emprendedor';
import emprendimiento from './emprendimiento';

export default function* rootSaga() {
    yield all([emprendedor(),emprendimiento(),]);
}