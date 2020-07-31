import React from 'react';

import { Grid, Typography, Card,Container} from '@material-ui/core';
import ListButtom from './components/ListasEnlaces';
import ListLinks from './components/BloqueLinks';
import makeStyles from './style';
import Consultorias from './Ejemplo/ejemplo.json';
import Inversion from  './Ejemplo/ejemplo2.json';
//import DenseAppBar from './page';

export default function page() {
	 const classes = makeStyles();

	return (
		<Container className={classes.container} maxWidth={'xl'}>
           <Grid container spacing={4}>
				<Grid item xs={12} md={6} lg={4}>
					<Card className={classes.containerList} variant='elevation' elevation={2}>
					<Typography className={classes.title} variant='h5'>Herramientas</Typography>
						<ListButtom />
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={4}>
					<Card className={classes.containerList} variant='elevation' elevation={2}>
					<Typography className={classes.title} variant='h5'>Consultorías</Typography>
						<ListLinks array={Consultorias} />
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={4}>
					<Card className={classes.containerList} variant='elevation' elevation={2}>
					<Typography className={classes.title} variant='h5'>Inversiones</Typography>
					    <ListLinks array={Inversion} />
						</Card>
					</Grid>
				</Grid>
		</Container>
	);
}