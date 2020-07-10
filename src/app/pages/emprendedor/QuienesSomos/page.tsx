import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import Image from "./components/image";
import Info from "./components/informacion";
import Footer from "./components/footer";
import style from './style';
import imagePath from './assets/fondob.jpg';


export default function QuienesSomos() {
	const classes = style();

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>

				<Grid container>
					<Grid item xs={12} lg={5}>
						<Info />
					</Grid>
					<Grid item xs={12} lg={7}>
						<Image />
					</Grid>
				</Grid>

				<Grid container>
					<Grid item xs={12} lg={12}>
						<div className={classes.franja} >
						</div>
					</Grid>


					<Grid item xs={12} lg={12}>
						<div className={classes.frases1} >
							Nuestros Objetivos
						</div>
					</Grid>
				</Grid>

				<Grid container>
					<Grid item>

						<div className={classes.frases} >
							<Typography variant="body1">
								Acompañar al emprendedor guayaquileño a lo largo de su emprendimiento,
								brindándole diferentes herramientas para satisfacer sus necesidades en temas de
								contactos, mentorías y financiación.
          </Typography>

						</div>
						<img className={classes.img} src={imagePath} alt='Exito en emprender' />
					</Grid>
				</Grid>

				<Grid container>
					<Grid item xs={12} lg={12}>
						<Footer />
					</Grid>
				</Grid>
			</Grid>
		</Grid >
	);
}