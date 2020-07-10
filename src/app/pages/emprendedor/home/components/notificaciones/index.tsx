import React from 'react';

import Page from './page';

interface personCardType{
    nombre: string;
    descripcion: string;
    img: string;
}
interface peopleCardType{
    array: Array<personCardType>
}

export default function index(peopleCard:peopleCardType) {
	return <Page peopleCard={peopleCard} />;
}

