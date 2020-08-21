import { get } from 'lodash';
//AQUI VAN PETICIONES DE CONTENIDO QUE SE ENCUENTRA EN EL STORE
// O TAMBIEN AQUEL QUE SE VA A SOLICITAR Y GUARDAR EN EL STORE

/*export const notifications = (state) => get(state, 'notifier.notifications');

export const carreraSeleccionada = (state) => get(state, 'carrera.carrera');
export const teoricosResults = (state, codigo) => {
	return get(state, 'teoricos.teoricos').find((par) => par.codigo === codigo);
};
export const seleccionados = (state) => get(state, 'seleccionados');
export const paqueteria = (state) => get(state, 'paqueteria');
*/ 
export const emprendedor = (state) => get(state, 'emprendedor.object');
export const emprendimiento = (state) => get(state, 'emprendimiento.array');