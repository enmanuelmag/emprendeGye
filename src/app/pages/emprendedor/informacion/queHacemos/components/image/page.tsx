import React from 'react';
import imagePath from './assets/quehacemos.jpg';
import style from './style';
export default function page() {
	const classes = style();
	return (
		<img className={classes.img} src={imagePath} alt='Exito en emprender' />
	);
}