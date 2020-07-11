import React from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	Divider,Typography
} from '@material-ui/core';
import style from './style';
import Image from "./image";

export default function page() {
	const classes = style();
	var titulo = React.createElement('Typography', 
	{id:'tituloCurva', variant:'caption'},'Curva de emprendimiento');

	return (
		<Card className={classes.card}>
			
			<CardContent  className={classes.content} >
				<Typography variant="h5" className={classes.titulo} >
					Curva de emprendimiento
					</Typography>
				<Divider/>
				<Image/>	
			</CardContent>
		</Card>
	);
}
