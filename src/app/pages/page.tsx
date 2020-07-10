import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import style from './style';

export default function home() {
  const classes = style();

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2">Guayaquil</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h1">EmprendeGYE</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Soy</Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={10} lg={4}>
              <Button variant="contained" className={classes.button}>
                Entidad
              </Button>
            </Grid>
            <Grid item xs={10} lg={4}>
              <Button
                variant="contained"
                href="/login"
                className={classes.button}
              >
                Emprendedor
              </Button>
            </Grid>
            <Grid item xs={10} lg={4}>
              <Button variant="contained" className={classes.button}>
                Mentor
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
