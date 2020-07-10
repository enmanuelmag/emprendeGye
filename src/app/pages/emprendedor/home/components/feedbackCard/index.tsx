import React from 'react';

import Page from './page';


interface personCardType{
    nombre: string;
    descripcion: string;
    img: string;
}

export default function index({personCard}:personCardType) {
	return <Page personCard={personCard} />;
}

