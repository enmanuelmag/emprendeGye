import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import style from './style';

const initData = { saludo: 'Buenos dias, ' , frase: "Existe el mañana por alguna razón", hora: "21:04:56"};

export default function home() {

    const classes = style();

    return (
        <>
        <Typography className={classes.typographyTitle}>
                {initData.saludo} 
        </Typography>
        <Typography className={classes.typographyTitle}>
                {initData.hora}
        </Typography>
        <Typography className={classes.typographyTitle}>
                {initData.frase}
        </Typography>
        </>
    )
}