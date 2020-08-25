import React from 'react';
import { Line } from 'react-chartjs-2';
import chartData from './assets/data';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import style from './style';

const customRadius = (context) => {
  let index = context.dataIndex;
  //let value = context.dataset.data[ index ];
  return index === 3 ||
    index === 6 ||
    index === 9 ||
    index === 12 ||
    index === 15 ||
    index === 19 ||
    index === 22
    ? 4
    : 0;
};

const customColor = (context) => {
  let index = context.dataIndex;
  //let value = context.dataset.data[ index ];
  return index === 19 ? 'red' : 'grey';
};
export default function fe() {
  const classes = style();
  var titulo = { titulo: 'Curva de emprendimiento' };

  return (
    <Card className={classes.card} variant="outlined">
        <CardContent className={classes.content}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h5" className={classes.titulo}>
                    {titulo.titulo}
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.plot}>
                    <Line
                    data={chartData}
                    options={{
                        legend: {
                        display: false,
                        },
                        scales: {
                        yAxes: [
                            {
                            display: false,
                            },
                        ],
                        xAxes: [
                            {
                            display: false,
                            },
                        ],
                        },
                        layout: {
                        padding: 10,
                        },
                        elements: {
                        point: {
                            radius: customRadius,
                            display: true,
                            backgroundColor: customColor,
                        },
                        },
                    }}
                    />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
}