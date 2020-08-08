import React from 'react'
import style from './style';
import { TextField, Grid, Typography } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';
import { Radio, RadioGroup } from '@material-ui/core';
import { FormControl, FormControlLabel } from '@material-ui/core';

export default function Page() {
    const classes = style();
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

	return (
        <Grid container xs={12} className={classes.container}>
            <Grid item xs={12} lg={12}>
                <Typography variant="h4" align="center" display='block' className={classes.title}>
                    Datos del emprendedor
                </Typography>
            </Grid>
            <Grid item lg={2}></Grid>
            <Grid item xs={12} lg={4}>
                <Card variant="outlined" className={classes.formControl}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2" align='center' className={classes.bold}>
                            Datos generales
                        </Typography>
                        <form className={classes.root} autoComplete='off'>
                            <TextField
                                id='outlined-basic'
                                required
                                type='text'
                                label='Nombres'
                            />
                            <TextField
                                id='outlined-basic'
                                required
                                type='text'
                                label='Apellidos'
                            />
                            <TextField
                                id='outlined-basic'
                                required
                                type='id'
                                label='Cédula'
                            />
                            <TextField
                                id='outlined-basic'
                                required
                                type='email'
                                label='Correo electrónico'
                            />
                            <TextField
                                id='outlined-basic'
                                required
                                type='password'
                                label='Contraseña'
                            />
                            <TextField
                                id="date"
                                label="Fecha de nacimiento"
                                type="date"
                                defaultValue={new Date()}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </form>
                    </CardContent>
                </Card>
                </Grid>
            <Grid item xs={12} lg={4}>
                <Card variant="outlined" className={classes.formControl}>
                    <CardContent>
                        <form className={classes.root} autoComplete='off'>
                        <FormControl component="fieldset">
                            <Typography gutterBottom variant="h6" component="h2" align='center' className={classes.title2}>
                                Ocupación
                            </Typography>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="estudiante" control={<Radio />} label="Estudiante universitario" />
                                <FormControlLabel value="jubilado" control={<Radio />} label="Jubilado" />
                                <FormControlLabel value="empleado" control={<Radio />} label="Empleado" />
                                <FormControlLabel value="subempleado" control={<Radio />} label="Subempleado" />
                                <FormControlLabel value="otro" control={<Radio />} label="Otro" />
                                <TextField
                                    id='outlined-basic'
                                    type='text'
                                    label='Otra ocupación'
                                />
                            </RadioGroup>
                            </FormControl>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={2}></Grid>
        </Grid>
	);
}
