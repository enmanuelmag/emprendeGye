import React from 'react';

import Page from './page';
import { EnvEvents, EnvGroupForum, EnvPeople } from '@interfaces/emprendedor';

import datosEcosistema from './datosEcosistema';

export default function index() {
	const datos = datosEcosistema;

	const people: EnvPeople = datos['personas'];
	const events: EnvEvents = datos['eventos_talleres'];
	const gruopFroums: EnvGroupForum = datos['grupos_foros'];

	return <Page />;
}
