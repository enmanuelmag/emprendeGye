import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import style from './style';
import Image from "./components/image";
export default function QuienesSomos() {
	const classes = style();
	return (
		<Grid container className={classes.root}>
			
			<Grid item xs={12}>
				<Image/>
			</Grid>

			<Grid item container justify="flex-start"
  					alignItems="flex-start" spacing={3}>
			
			<Grid item  xs={12}>
				<Typography className={classes.typography}  variant="h5" component="h2">
					¿Qué hacemos?
				</Typography>
			</Grid>

			<Grid item xs={12}>
				<Typography className={classes.info} variant="body1">
					Dado el rango variado de emprendedores dentro de Guayaquil en distintas áreas se debe priorizar que la solución sea comprensible, dinámica y evidente sin exceso o carencia de funcionalidades que distraigan al emprendedor al igual que diseños muy complejos que conllevan a que el emprendedor abandone la plataforma digital y pierda oportunidades de desarrollo.
					Por eso la plataforma EmprendeGye presenta al usuario una interfaz intuitiva con herramientas fáciles de usar que cumplan sus necesidades dependiendo de la etapa de la curva del emprendimiento en la que se encuentre, integrando diferentes actores tanto públicos como privados en este proceso.
			</Typography>

			</Grid>

		</Grid>
		
		</Grid>
	);
  }

