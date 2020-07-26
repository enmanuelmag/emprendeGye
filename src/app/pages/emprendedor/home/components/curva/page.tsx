import React from 'react';
import {
	Card,
	CardContent,
	Typography
} from '@material-ui/core';
import style from './style';
import Image from "./image";




export default function page() {
	const classes = style();
	var titulo = { titulo: 'Curva de emprendimiento' }

	return (
		<Card variant='outlined' className={classes.card}>

			<CardContent className={classes.content} >
				<Typography variant="h5" className={classes.titulo} >
					{titulo.titulo}
				</Typography>

				<Image />
			</CardContent>
		</Card>
	);
}
