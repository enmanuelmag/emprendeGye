import { all } from 'redux-saga/effects';
import emprendedor from './emprendedor';
import emprendimiento from './emprendimiento';
import ganancias from './ganancias';
import email from './enviarEmail';
import emprendedorCuenta from "./emprendedorCuenta";
export default function* rootSaga() {
  yield all([emprendedor(), emprendimiento(), ganancias(), email(), emprendedorCuenta()]);
}
