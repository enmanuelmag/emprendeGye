import React from 'react';
import { Grid, Paper, Container } from '@material-ui/core';

import style from './style';

export default function page() {
	const classes = style();

	return (
		<Container>
			<Grid container>
				<Grid item lg={4}>
					Hola
				</Grid>
				<Grid item lg={4}>
					Hola
				</Grid>
				<Grid item lg={4}>
					Hola
				</Grid>
			</Grid>
		</Container>
	);
}
