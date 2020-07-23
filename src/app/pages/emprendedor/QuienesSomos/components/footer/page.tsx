import React from 'react';
import style from "./style";
import imagePathfooter from './assets/logofoot.svg';
import { Grid, Container, Typography } from '@material-ui/core';

export default function Footer() {
    const classes = style();

    return (
     <Container  className={classes.root} >
			<Grid container spacing={3} >
				<Grid item md={3} lg={3}>
                    <div className={classes.imacont}>
                    <img className={classes.imagen} src={imagePathfooter} alt='Logo EmprendeGye' />
                    </div>
				</Grid>
				
                <Grid item   md={2} lg={2}></Grid>

                <Grid item lg={3} md={3} className={classes.columna2}>
                        <Typography variant="h6">
                        COLABORADORES
                        </Typography>

                    <Typography variant="body2">
                        <ul className={classes.lista}>
                            <li>Diana Molina Torres</li>
                            <li>Enmanuel Magallanes Pinagorte</li>
                            <li>Josué Cobos Salvador</li>
                            <li>Paulette Vásquez Matute</li>
                        </ul>
                    </Typography>
						</Grid>
				
                    <Grid item  md={1} lg={1}></Grid>

                    <Grid item   md={3} lg={3} className={classes.columna2}>
                        <Typography variant="h6">
                        CONTACTOS
                    </Typography>

                    <Typography variant="body2">
                        <ul className={classes.lista}>
                            <li>dianmoli@espol.edu.ec</li>
                            <li>fmagalla@espol.edu.ec</li>
                            <li>jcoboss@espol.edu.ec</li>
                            <li>jpvasque@espol.edu.ec</li>
                        </ul>
                    </Typography>
                    </Grid>

                    <Grid container>
						<Grid item xs={12} lg={12} className={classes.foot}>
                        <Typography variant="body1"> EmprendeGye® todos los derechos reservados.2020. </Typography>
						</Grid>
						</Grid>

				</Grid>
		</Container>







     /*   
        <div className={classes.root}>
            <div className={classes.contenido}>

                <img className={classes.imagen} src={imagePathfooter} alt='Logo EmprendeGye' />

                <div className={classes.columna}>
                    <Typography variant="h6">
                        EQUIPO DE DESARROLLO
                    </Typography>

                    <Typography variant="body2">
                        <ul className={classes.lista}>
                            <li>Diana Molina Torres</li>
                            <li>Enmanuel Magallanes Pinagorte</li>
                            <li>Josué Cobos Salvador</li>
                            <li>Paulette Vásquez Matute</li>
                        </ul>
                    </Typography>
                </div>

                <div className={classes.columna2}>
                    <Typography variant="h6">
                        CONTACTOS
                    </Typography>

                    <Typography variant="body2">
                        <ul className={classes.lista}>
                            <li>dianmoli@espol.edu.ec</li>
                            <li>fmagalla@espol.edu.ec</li>
                            <li>jcoboss@espol.edu.ec</li>
                            <li>jpvasque@espol.edu.ec</li>
                        </ul>
                    </Typography>
                </div>
            </div>

            <div className={classes.foot}>
                <Typography variant="body1"> EmprendeGye® todos los derechos reservados.2020. </Typography>
            </div>

        </div>*/
    );
}