import React from 'react';

import Page from './page';
import dataGrafico from './data';

export default function index() {
    const data = dataGrafico;
	return <Page data={data}></Page>;
}
