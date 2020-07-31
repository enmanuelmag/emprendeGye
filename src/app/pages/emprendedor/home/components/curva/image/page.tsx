import React from 'react';

import style from './style';
import imagePath from "../assets/curva.png";


export default function page() {
	const classes = style();
	return (
		<img className={classes.img} src={imagePath} alt='Cruva de emprendimiento' />
	);
}
