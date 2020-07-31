import React from 'react';

import Page from './page';

interface SubProps {
    name: string;
    links: Array<ObjectURL>;
}

interface Props {
    aprender: SubProps;
}
interface ObjectURL {
    name: string;
    url: string;
}

export default function Index({aprender} : Props) {
	return <Page aprender={aprender}/>;
}

