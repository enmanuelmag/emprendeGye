import React, { Component } from "react";
import { render } from "react-dom";
import { Grid } from '@material-ui/core';
import style from './style';
import Curva from './components/curva';
import Saludo from './components/saludo';
import Actividades from "./components/actividades";
import Retroalimentación from "./components/retroalimentacion";
import Notificaciones from "./components/notificaciones";
import {feed} from './components/xamples/feedbacks';
import {noti} from './components/xamples/notificaciones';
import { Steps, Hints } from "intro.js-react";
import "intro.js/introjs.css";
import introJs from 'intro.js';

import {HomeSteps} from './steps/index.js';
//introJs().addHints();
 // introJs.start();
/*
const HomeSteps = [
    {
      element: '.curvaComponet',
      intro: 'En este gráfico podrás ver tus progreso en la curva del emprendimiento',
      //position: 'right',
      //tooltipClass: 'myTooltipClass',
      //highlightClass: 'myHighlightClass',
    },
    {
      element: '.saludo',
      intro: 'Dale doble click y personaliza tu mensaje de inicio',
    },
    {
      element: '.notificaciones',
      intro: 'En esta sección podrás encontrar tus notificaciones más recientes',
    },
    {
      element: '.actividades',
      intro: 'Agrega, elimina y administra tus próximas actividades',
    },
    {
      element: '.retroalimentacion',
      intro: 'Estas son las últimas retroalimentaciones dadas por tus mentores',
    },
  ];
  */
export default function Home() {
    
    const classes = style();
    const [stepsEnabled, setStepsEnabled] = React.useState(true);
    const steps = HomeSteps;
    const onExit = () => {
        setStepsEnabled(false);
      };
    return (
        <>
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={0}
          onExit={onExit}
        />

        <Grid className={classes.contPrincipal} id="grid home" container spacing={3}>
            <Grid container item spacing={3} xs={12}>
                <Grid className="curvaComponet" item xs={8}>
                    <Curva/>
                </Grid>
                <Grid item xs={4} >
                    <Grid container direction="column" spacing={3}>
                        <Grid  className="saludo" item xs={12} style={{ maxHeight: 'auto' }} >
                            <Saludo />
                        </Grid>
                        <Grid  className="notificaciones" item xs={12} style={{ maxHeight: 'auto' }}>
                            <Notificaciones peopleCard={noti} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item spacing={3} xs={8}
                justify="center"
                alignItems="flex-start">
                <Grid className="actividades" item xs={6}>
                    <Actividades />
                </Grid>
                <Grid className="retroalimentacion" item xs={6}>
                    <Retroalimentación  peopleCard={feed} />
                </Grid>
            </Grid>


        </Grid>
        </>
    )
}