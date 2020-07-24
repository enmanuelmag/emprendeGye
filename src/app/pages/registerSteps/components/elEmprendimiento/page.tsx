import React from 'react'
import style from './style';
import { TextField, Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Page() {
    const classes = style();

    const sector = ['Biotech','Healthtech','Fintech','Agtech']

    return (
        <Grid container xs={12} className={classes.container}>
            <Grid item xs={12} lg={12}>
                <Typography variant="h4" align="center" display='block' className={classes.title}>
                    El emprendimiento
                </Typography>
            </Grid>
            <Grid item lg={4}></Grid>
            <Grid item lg={4} className={classes.section2}>
                <Card variant="outlined">
                    <CardContent className={classes.formControl}>
                        <Grid container>
                                <Grid item xs={12} className={classes.section}>
                                    <Autocomplete
                                        id="combo-box-demo"
                                        options={sector}
                                        getOptionLabel={(option) => option}
                                        style={{ width: '94%' }}
                                        renderInput={(params) => <TextField {...params} label='Sector del emprendimiento'/>}
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.section}>
                                    <Typography variant="subtitle1" display='block' className={classes.bold}>
                                        Alcance del negocio
                                    </Typography>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                        <FormControlLabel
                                        value="local"
                                        control={<Radio color="primary" />}
                                        label="Local"
                                        labelPlacement="end"
                                        />
                                        <FormControlLabel
                                        value="ciudad"
                                        control={<Radio color="primary" />}
                                        label="Ciudad"
                                        labelPlacement="end"
                                        />
                                        <FormControlLabel
                                        value="pais"
                                        control={<Radio color="primary" />}
                                        label="País"
                                        labelPlacement="end"
                                        />
                                    </RadioGroup>
                                </Grid>
                                <Grid item xs={12} className={classes.section}>
                                    <Typography variant="subtitle1" display='block' className={classes.bold}>
                                        Impacto del negocio
                                    </Typography>
                                    <form className={classes.root} autoComplete='off'>
                                        <TextField
                                            id='outlined-basic'
                                            required
                                            type='text'
                                            label='Número de empleos que puede generar'
                                        />
                                    </form>
                                </Grid>
                                <Grid item xs={12} className={classes.section}>
                                    <Typography variant="subtitle1" display='block' className={classes.bold}>
                                        Tiempo de implementación
                                    </Typography>
                                    <form className={classes.root} autoComplete='off'>
                                        <TextField
                                            id='outlined-basic'
                                            required
                                            type='text'
                                            label='Cantidad de meses'
                                        />
                                    </form>
                                </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={4}></Grid>
        </Grid>
    )
}
