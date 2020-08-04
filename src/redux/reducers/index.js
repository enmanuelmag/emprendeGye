import { combineReducers } from 'redux';
import emprendedor from './emprendedor';
import notifier from './notifier';

export const initialState = {
	emprendedor = {state: "", object: {}},
	notifier = [],
};
const STORE = combineReducers(initialState);

export default STORE;
