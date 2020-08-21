import React from 'react';
import style from './style';
import { TextField, Grid, Typography, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Page() {
  const classes = style();
  const nivel = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <Grid
      container
      xs={12}
      className={classes.container}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} lg={12}>
        <Typography
          variant="h4"
          align="center"
          display="block"
          className={classes.title}
        >
          Habilidades blandas (Soft Skills)
        </Typography>
      </Grid>

      <Grid item lg={12} className={classes.section2}>
        <Container maxWidth="md">
          <Card variant="outlined">
            <CardContent className={classes.formControl}>
              <Grid
                container
                spacing={4}
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Grid item xs={12} lg={6}>
                  <Grid container>
                    <Grid item xs={8} className={classes.section}>
                      Trabajo en equipo
                    </Grid>
                    <Grid item xs={4} className={classes.section}>
                      <Autocomplete
                        id="combo-box-demo"
                        options={nivel}
                        getOptionLabel={(option) => option}
                        style={{ width: '94%' }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Grid container>
                    <Grid item xs={8} className={classes.section}>
                      Adaptabilidad
                    </Grid>
                    <Grid item xs={4} className={classes.section}>
                      <Autocomplete
                        id="combo-box-demo"
                        options={nivel}
                        getOptionLabel={(option) => option}
                        style={{ width: '94%' }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} lg={6}>
                  <Grid container>
                    <Grid item xs={8} className={classes.section}>
                      Creatividad
                    </Grid>
                    <Grid item xs={4} className={classes.section}>
                      <Autocomplete
                        id="combo-box-demo"
                        options={nivel}
                        getOptionLabel={(option) => option}
                        style={{ width: '94%' }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Grid container>
                    <Grid item xs={8} className={classes.section}>
                      Resolución de problemas
                    </Grid>
                    <Grid item xs={4} className={classes.section}>
                      <Autocomplete
                        id="combo-box-demo"
                        options={nivel}
                        getOptionLabel={(option) => option}
                        style={{ width: '94%' }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} lg={6}>
                  <Grid container>
                    <Grid item xs={8} className={classes.section}>
                      Comunicación
                    </Grid>
                    <Grid item xs={4} className={classes.section}>
                      <Autocomplete
                        id="combo-box-demo"
                        options={nivel}
                        getOptionLabel={(option) => option}
                        style={{ width: '94%' }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} lg={6}>
                  <Grid container>
                    <Grid item xs={8} className={classes.section}>
                      Inteligencia emocional
                    </Grid>
                    <Grid item xs={4} className={classes.section}>
                      <Autocomplete
                        id="combo-box-demo"
                        options={nivel}
                        getOptionLabel={(option) => option}
                        style={{ width: '94%' }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} lg={6}>
                  <Grid container>
                    <Grid item xs={8} className={classes.section}>
                      Manejo del tiempo
                    </Grid>
                    <Grid item xs={4} className={classes.section}>
                      <Autocomplete
                        id="combo-box-demo"
                        options={nivel}
                        getOptionLabel={(option) => option}
                        style={{ width: '94%' }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} lg={6}>
                  <Grid container>
                    <Grid item xs={8}>
                      Trabajo bajo presión
                    </Grid>
                    <Grid item xs={4}>
                      <Autocomplete
                        id="combo-box-demo"
                        options={nivel}
                        getOptionLabel={(option) => option}
                        style={{ width: '94%' }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Grid>
      <Grid item lg={4}></Grid>
    </Grid>
  );
}
