import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import style from './style';
import { aprendizaje, otros } from './xample/index.js'
import VideoList from "./components/VideoList"
import Otros from "./components/Otros"
export default function home() {

        const classes = style();

        return (
                <Grid className={classes.contPrincipal} id="grid home" container spacing={3} justify="center"
                alignItems="flex-start">
                        <Grid container item  xs={12} md={8} >
                        {aprendizaje.slice(0, 2).map((element, index) => (
                                <Grid key={index} container item spacing={3} xs={12}  justify="center"
                                alignItems="center">
                                        <Grid item xs={12}>
                                                <Typography className={classes.title} variant='h5'>
                                                        {element.name}
                                                </Typography>

                                        </Grid>
                                        <Grid container xs={12}  justify="flex-start">
                                                <Grid item>
                                                <VideoList aprender={element}/>
                                                </Grid>

                                        </Grid>
                                </Grid>
                        ))}
                        </Grid>
                        <Grid item xs={12} md={4}>
                                <Otros aprender={otros} />
                        </Grid>
                </Grid>

        )
}
/*
 <iframe title='jol' width="560" height="315"
                frameBorder={0}
                src="https://www.youtube.com/embed/94C3GaurHLk"
                allowFullScreen = {true}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                >
                        </iframe>
*/