import React from 'react';
import { Grid } from '@material-ui/core';
import style from './style';
import Curva from './components/curva';
import Saludo from './components/saludo';
import Actividades from "./components/actividades";
import Retroalimentación from "./components/retroalimentacion";
import Notificaciones from "./components/notificaciones";
import {feed} from './components/xamples/feedbacks';
import {noti} from './components/xamples/notificaciones';
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";

import { HomeSteps } from './steps/index.js';
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

      <Grid
        className={classes.contPrincipal}
        id="grid home"
        container
        spacing={3}
      >
        <Grid container item spacing={3} xs={12}>
          <Grid className="curvaComponet" item md={8} xs={12}>
            <Curva />
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container direction="column" spacing={3} xs={12}>
              <Grid className="saludo" item xs={12}>
                <Saludo />
              </Grid>
              <Grid className="notificaciones" item xs={12}>
                <Notificaciones peopleCard={noti} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={3}
          xs={12}
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid className="actividades" item md={4} xs={12}>
            <Actividades />
          </Grid>
          <Grid className="retroalimentacion" item md={4} xs={12}>
            <Retroalimentación peopleCard={feed} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
