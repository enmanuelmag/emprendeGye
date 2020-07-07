import React from 'react';

import Page from './page';

interface SubProps {
	name: string;
	links: Array<string>;
}

interface Props {
	aprender: SubProps;
}

export default function Index({aprender} : Props) {
	return <Page aprender={aprender} />;
}

