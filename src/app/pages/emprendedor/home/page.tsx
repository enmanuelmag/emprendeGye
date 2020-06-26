import React from 'react';
import { Grid } from '@material-ui/core';
import style from './style';
import Curva from './components/curva';
import Saludo from './components/saludo';
import Actividades from "./components/actividades";
import Retroalimentación from "./components/retroalimentacion";
import Notificaciones from "./components/notificaciones";



export default function home() {

    const classes = style();

    return (
            <Grid className={classes.contPrincipal} id="grid home" container spacing={3}>    
                <Grid container spacing={3} xs={8}>
                    <Grid item xs={12}>
                        <Curva />
                    </Grid>
                    <Grid container spacing={3} xs={12}
                        direction="row"
                        justify="center"
                        alignItems="flex-start">
                        <Grid item xs={6}>
                            <Actividades />
                        </Grid>
                        <Grid item xs={6}>
                            <Retroalimentación />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={3} xs={4} justify="flex-start" direction="column"
                alignItems="flex-start">
                    <Grid item style={{maxHeight: 'auto'}} >
                        <Saludo />
                    </Grid>
                    <Grid item  style={{maxHeight: 'auto'}}>
                        <Notificaciones />
                    </Grid>
                </Grid>
            </Grid>
    )
}