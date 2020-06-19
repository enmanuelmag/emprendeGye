import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

import Form from './components/form';
import Image from './components/image';

import style from './style';

export default function page() {
	const classes = style();

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant='h2'>Perfil</Typography>
			</Grid>

			<Grid item xs={12}>
				<Grid container>
					<Grid item xs={12} lg={6}>
						<Image />
					</Grid>
					<Grid item xs={12} lg={6}>
						<Form />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
