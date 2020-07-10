import React from 'react';
import Page from './page';


interface Tipos{srcLink: string, srcImg: string , alt:string};
interface Props{array:Tipos[]};

export default function index(props:Props) {
	return <Page array={props.array}/>;
}
