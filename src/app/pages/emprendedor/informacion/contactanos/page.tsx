import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import Form from "./components/form";
import style from "./style";
import Map from "./components/map";

export default function FContactanos() {
	const classes = style();
	return (
		<Container maxWidth="lg" >
			<Grid container spacing={3} className={classes.root}>
				<Grid item xs={12} lg={12} className={classes.textPerfil}>
					<Typography variant='h5'>¿Tienes preguntas?</Typography>
					<Typography variant='h2'>CONTÁCTANOS</Typography>
				</Grid>
				
				<Grid item xs={12} className={classes.gridInfo}>
					<Grid container>
						<Grid item xs={12} lg={12} className={classes.gridItem}>
							<Form />
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12} lg={12} className={classes.textPerfil}>
					<Typography variant='h5'>Encuéntranos</Typography>
					<Typography variant='h5'>Nuestras oficinas</Typography>
				</Grid>

				<Grid container item xs={12}  justify="center" >
					<Map/>
				</Grid>

			</Grid>
		</Container>
	);
}