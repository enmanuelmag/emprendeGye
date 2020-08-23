import { combineReducers } from 'redux';
import emprendedor from './emprendedor';
import emprendimiento from './emprendimiento';
import ganancias from './ganancias';
//import notifier from './notifier';

export const initialState = {
	emprendedor,
	emprendimiento,
	ganancias
};
const STORE = combineReducers(initialState);

export default STORE;
