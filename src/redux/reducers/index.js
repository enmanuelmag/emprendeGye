import { combineReducers } from 'redux';
import emprendedor from './emprendedor';
import emprendimiento from './emprendimiento';
//import notifier from './notifier';

export const initialState = {
	emprendedor,
	emprendimiento
};
const STORE = combineReducers(initialState);

export default STORE;
