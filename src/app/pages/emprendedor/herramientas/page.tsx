import React from 'react';

import { Grid, Typography} from '@material-ui/core';
import ListButtom from './components/ListasEnlaces';
import ListLinks from './components/BloqueLinks';
import makeStyles from './style';
import Consultorias from './Ejemplo/ejemplo.json';
import Inversion from  './Ejemplo/ejemplo2.json';
//import DenseAppBar from './page';

export default function page() {
	 const classes = makeStyles();

	return (
			<Grid container spacing={3}>			
            <Grid item xs={12}>
				<Grid container>
					<Grid item xs={6} lg={4}>
					<Typography className={classes.typography} variant='h5'>Herramientas</Typography>
					</Grid>
					<Grid item xs={3} lg={4}>
						<Typography className={classes.typography} variant='h5'>Consultorías</Typography>
					</Grid>
					<Grid item xs={3} lg={4}>
						<Typography className={classes.typography} variant='h5'>Inversiones</Typography>
					</Grid>
				</Grid>
			</Grid>

			<Grid item xs={12}>
				<Grid container>
					<Grid item xs={6} lg={4}>
						<ListButtom />
					</Grid>
					<Grid item xs={3} lg={4}>
						<ListLinks array={Consultorias} />
					</Grid>
					<Grid item xs={3} lg={4}>
					    <ListLinks array={Inversion} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}