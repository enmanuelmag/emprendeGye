import React from 'react';
import style from './style';

import { Grid, Typography, Container } from '@material-ui/core';

import Form from './components/form';
import Image from './components/image';

//import style from './style';

export default function page() {
	const classes = style();

	return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} lg={6} className={classes.textPerfil}>
                    <Typography variant='h3'>Perfil</Typography>
                </Grid>
                <Grid lg={6}></Grid>

                <Grid item xs={12} className={classes.gridInfo}>
                    <Grid container>
                    <Grid  item xs={12} lg={5} className={classes.gridItem}>
                            <Form />
                        </Grid>
                        <Grid item xs={12} lg={5} className={classes.gridItem}>
                            <Image />
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Container>
	);
}
