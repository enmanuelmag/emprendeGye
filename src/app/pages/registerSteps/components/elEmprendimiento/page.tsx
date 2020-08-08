import React from 'react'
import style from './style';
import { TextField, Grid, Typography } from '@material-ui/core';
import { Card, CardContent} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Radio, RadioGroup} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InfoIcon from '@material-ui/icons/Info';
import Alert from './../../../../utils/alert';

export default function Page({ data }: { data: any }) {
    const classes = style();

    const dataAlert = data;
    const iconAlert = <InfoIcon fontSize="inherit" />

    const sector = ['Biotech','Healthtech','Fintech','Agtech']

    return (
        <Grid container xs={12} className={classes.container}>
            <Grid item xs={12} lg={12}>
                <Typography variant="h4" align="center" display='block' className={classes.title}>
                    El emprendimiento
                </Typography>
            </Grid>
            <Grid item lg={3}></Grid>
            <Grid item lg={5} className={classes.section2}>
                <Card variant="outlined">
                    <CardContent className={classes.formControl}>
                        <Grid container>
                                <Grid item xs={12} className={classes.section}>
                                    <Grid container >
                                        <Grid item xs={11}>
                                            <Typography variant="subtitle1" display='block' className={classes.bold}>
                                                Categoría del emprendimiento
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Alert data={dataAlert["categoria"]} icon={iconAlert} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Autocomplete 
                                                id="combo-box-demo"
                                                options={sector}
                                                getOptionLabel={(option) => option}
                                                renderInput={(params) => <TextField {...params} label='Categoría'/>}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} className={classes.section}>
                                    <Grid container >
                                        <Grid item xs={11}>
                                            <Typography variant="subtitle1" display='block' className={classes.bold}>
                                                Alcance del negocio
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Alert data={dataAlert["alcance"]} icon={iconAlert} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                            <Grid container>
                                                <Grid item xs={4}>
                                                    <FormControlLabel
                                                    value="local"
                                                    control={<Radio color="primary" />}
                                                    label="Local"
                                                    labelPlacement="end"
                                                    />
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <FormControlLabel
                                                    value="nacional"
                                                    control={<Radio color="primary" />}
                                                    label="Nacional"
                                                    labelPlacement="end"
                                                    />
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <FormControlLabel
                                                    value="internacional"
                                                    control={<Radio color="primary" />}
                                                    label="Internacional"
                                                    labelPlacement="end"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </RadioGroup>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} className={classes.section}>
                                    <Grid container >
                                        <Grid item xs={11}>
                                            <Typography variant="subtitle1" display='block' className={classes.bold}>
                                            Impacto del negocio
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Alert data={dataAlert["impacto"]} icon={iconAlert} />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <form className={classes.root} autoComplete='off'>
                                            <TextField
                                                id='outlined-basic'
                                                required
                                                type='number'
                                                label='Número de empleos que puede generar'
                                            />
                                        </form>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} className={classes.section}>
                                    <Grid container >
                                        <Grid item xs={11}>
                                            <Typography variant="subtitle1" display='block' className={classes.bold}>
                                                Tiempo en el mercado (en meses)
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Alert data={dataAlert["tiempo"]} icon={iconAlert} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <form className={classes.root} autoComplete='off'>
                                                <TextField
                                                    id='outlined-basic'
                                                    required
                                                    type='number'
                                                    label='Cantidad de meses'
                                                />
                                            </form>
                                        </Grid>
                                    </Grid>
                                </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={3}></Grid>
        </Grid>
    )
}
