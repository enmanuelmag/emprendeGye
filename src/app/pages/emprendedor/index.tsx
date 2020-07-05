import React from 'react';

import PageEmprendedor from './page';
import CuentaEmprendedor from './cuenta';
import HerramientasEmprendedor from './herramientas';
import QuienesSomosEmprendedor from './QuienesSomos';

export function Page() {
	return <PageEmprendedor />;
}

export function Cuenta() {
	return <CuentaEmprendedor />
}

export function Herramientas() {
	return <HerramientasEmprendedor />
}

export function QuienesSomos() {
	return <QuienesSomosEmprendedor />
}
