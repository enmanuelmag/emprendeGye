import React from 'react';

import PageEmprendedor from './page';
import CuentaEmprendedor from './cuenta'
import HomeEmprendedor from './home'

export function Page() {
	return <PageEmprendedor />;
}

export function Cuenta() {
	return <CuentaEmprendedor />
}

export function Home() {
	return <HomeEmprendedor />
}
