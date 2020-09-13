import React from 'react';

import Page from './page';
import dataGrafico from './dataCapitalSemilla';

export default function index() {
    const data = dataGrafico;
	return <Page data={data}></Page>;
}
