import React from 'react';
import { Grid } from '@material-ui/core';
import style from './style';
import Curva from './components/curva';
import Saludo from './components/saludo';
import Actividades from "./components/actividades";
import Retroalimentación from "./components/retroalimentacion";
import {feed} from './components/xamples/feedbacks';
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";

import { HomeSteps } from './steps/index.js';

export default function Home() {
  const classes = style();
  const [stepsEnabled, setStepsEnabled] = React.useState(true);
  const steps = HomeSteps;
  const onExit = () => {
    setStepsEnabled(false);
  };
  return (
    <Grid container
          id="grid home"
          className={classes.contPrincipal}>
      <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={0}
        onExit={onExit}
      />
        <Grid container>
          <Grid item md={5} xs={12}>
            <Grid container direction="column"  xs={12}>
              <Grid className="saludo" item xs={12}>
                <Saludo />
              </Grid>
              <Grid className={classes.container} item xs={12} >
                  <Actividades />
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.plot} item md={7} xs={12}>
            <Curva />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          justify="flex-start"
          alignItems="flex-start"
          className={classes.container}
        >
          <Grid className="retroalimentacion" item xs={12}>
            <Retroalimentación peopleCard={feed} />
          </Grid>
        </Grid>
    </Grid>
  );
}
