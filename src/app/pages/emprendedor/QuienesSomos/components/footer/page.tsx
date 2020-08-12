import React from 'react';
import style from "./style";
import imagePathfooter from './assets/logofoot.svg';
import { Grid, Hidden, Container, Typography } from '@material-ui/core';

export default function Footer() {
    const classes = style();

    return (
        <Container className={classes.root} >
            <Grid container spacing={3} justify="space-between"
  alignItems="center" >
                <Grid item xs={5} md={3}>
                    <div className={classes.imacont}>
                        <img className={classes.imagen} src={imagePathfooter} alt='Logo EmprendeGye' />
                    </div>
                </Grid>
                <Hidden smDown>
                <Grid item xs={5} md={3} className={classes.columna2}>
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
                <Grid item xs={5} md={3} className={classes.columna2}>
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
                </Hidden >
                <Grid item xs={5} md={12} className={classes.foot}>
                    <Typography variant="body1"> EmprendeGye® todos los derechos reservados.2020. </Typography>
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