import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import Form from "./components/form";
import style from "./style";

export default function FContactanos() {
	const classes = style();
	return (
		<Container maxWidth="lg" >
			<Grid container spacing={3} className={classes.root}>
				<Grid item xs={12} lg={12} className={classes.textPerfil}>
					<Typography variant='h5'>¿Tienes preguntas?</Typography>
					<Typography variant='h2'>CONTÁCTANOS</Typography>
				</Grid>
				<Grid lg={6}></Grid>
				<Grid item xs={12} className={classes.gridInfo}>
					
					</Grid>
				</Grid>
		</Container>
	);
}