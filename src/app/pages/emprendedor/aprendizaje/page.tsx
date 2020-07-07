import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import style from './style';
import {aprendizaje} from './xample/index.js'
import VideoList from "./components/VideoList"
import Otros from "./components/Otros"
export default function home() {

        const classes = style();

        return (
                <Grid className={classes.contPrincipal} id="grid home" container spacing={3} justify="flex-start"
                alignItems="center">
                        {aprendizaje.slice(0,2).map((element, index) => (
                                <Grid key={index} container item spacing={3} xs={12} >
                                        <Grid item xs={12}>
                                                <Typography> {element.name} </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                                <VideoList aprender={element}/>
                                        </Grid>
                                </Grid>
                        ))}
                        <Grid container item spacing={3} xs={12} >
                                        <Grid item xs={12}>
                                                <Otros aprender={aprendizaje[2]}/>
                                        </Grid>
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