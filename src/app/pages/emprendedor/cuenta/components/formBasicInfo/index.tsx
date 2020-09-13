import React from 'react';

import Page from './page';
import parroquias from './datosParroquias';

export default function index() {
    const data = parroquias['parroquias'];
	return <Page data={data}/>;
}
