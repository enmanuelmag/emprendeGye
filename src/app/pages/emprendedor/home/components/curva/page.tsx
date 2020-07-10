import React from 'react';
import {
	Card,
	CardContent,
	Divider,Typography
} from '@material-ui/core';
import style from './style';
import Image from "./image";

export default function page() {
	const classes = style();
	var titulo = {titulo: 'Curva de emprendimiento'}

	return (
		<Card className={classes.card}>
			<Divider />
			<CardContent  className={classes.content} >
				<Typography variant="h6" className={classes.titulo} >
					{titulo.titulo}
					</Typography>
				<Divider/>
				<Image/>	
			</CardContent>
		</Card>
	);
}
