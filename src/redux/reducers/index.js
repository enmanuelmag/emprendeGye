import { combineReducers } from 'redux';
import emprendedor from './emprendedor';
import emprendimiento from './emprendimiento';
import ganancias from './ganancias';
import email from './enviarEmail';
import notifier from './notifier';
import emprendedorCuenta from "./emprendedorCuenta";
//import notifier from './notifier';

export const initialState = {
  emprendedor,
  emprendimiento,
  ganancias,
  email,
  notifier,
  emprendedorCuenta
};
const STORE = combineReducers(initialState);

export default STORE;
