import React from 'react';

import Page from './page';
import { EnvEvents, EnvGroupForum, EnvPeople } from '@interfaces/emprendedor';

import dataEcosistema from './datosEcosistema';

export default function index() {
	const dataExample = dataEcosistema;

	const people: EnvPeople = dataExample['personas'];
	const events: EnvEvents = dataExample['eventos_talleres'];
	const gruopFroums: EnvGroupForum = dataExample['grupos_foros'];

	const data = { people, events, gruopFroums };

	return <Page data={data} />;
}
