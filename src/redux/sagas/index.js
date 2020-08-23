import { all } from 'redux-saga/effects'
import emprendedor from './emprendedor';
import emprendimiento from './emprendimiento';
import ganancias from './ganancias';

export default function* rootSaga() {
    yield all([emprendedor(),emprendimiento(),ganancias()]);
}