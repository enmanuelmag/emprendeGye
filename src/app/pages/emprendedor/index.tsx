import React from 'react';

import PageEmprendedor from './page';
import CuentaEmprendedor from './cuenta';
import HerramientasEmprendedor from './herramientas';
import QuienesSomosEmprendedor from './QuienesSomos';
import EcosistemaEmprendedor from './ecosistema';
import NoticiasEmprendedor from './informacion/noticias';

export function Page() {
	return <PageEmprendedor />;
}

export function Cuenta() {
	return <CuentaEmprendedor />;
}

export function Ecosistema() {
	return <EcosistemaEmprendedor />;
}

export function Herramientas() {
	return <HerramientasEmprendedor />
}

export function QuienesSomos() {
	return <QuienesSomosEmprendedor />
}
export function Noticias() {
	return <NoticiasEmprendedor />
}
