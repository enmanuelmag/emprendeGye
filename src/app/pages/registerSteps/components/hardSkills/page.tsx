import React from 'react'
import style from './style';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, Grid, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Page() {
    const classes = style();

    const nivelEstudio = [{nivel:'Primaria'},
                          {nivel:'Secundaria'}, 
                          {nivel:'Tercer nivel'},
                          {nivel: 'CuartoNivel'}]
            
    const [state, setState] = React.useState({
        microsoftOffice: false,
        redesSociales: false,
        finanzasPersonales: false,
        programacion: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { microsoftOffice, redesSociales, finanzasPersonales, programacion } = state;

    return (
        <Grid container xs={12} className={classes.container}>
            <Grid item xs={12} lg={12}>
                <Typography variant="h4" align="center" display='block' className={classes.title}>
                    Habilidades duras (Hard Skills)
                </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
                <Card variant="outlined" className={classes.formControl}>
                    <CardContent>
                        <form className={classes.root} autoComplete='off'>
                            <Autocomplete
                                id="combo-box-demo"
                                options={nivelEstudio}
                                getOptionLabel={(option) => option.nivel}
                                style={{ width: '94%' }}
                                renderInput={(params) => <TextField {...params} label="Nivel de estudio" />}
                            />
                            <TextField
                                id='outlined-basic'
                                required
                                type='text'
                                label='Nombre del instituto'
                            />
                            <TextField
                                id='outlined-basic'
                                required
                                type='text'
                                label='Título obtenido'
                            />
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
                <Card variant="outlined" className={classes.formControl}>
                    <CardContent>
                        <FormControl component="fieldset">
                            <FormGroup className={classes.title}>
                            <FormControlLabel
                                control={<Checkbox checked={microsoftOffice} onChange={handleChange} name="microsoftOffice" />}
                                label="Microsoft Office"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={redesSociales} onChange={handleChange} name="redesSociales" />}
                                label="Redes Sociales"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={finanzasPersonales} onChange={handleChange} name="finanzasPersonales" />}
                                label="Finanzas Personales"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={programacion} onChange={handleChange} name="programacion" />}
                                label="Programación"
                            />
                            </FormGroup>
                        </FormControl>
                    </CardContent>
                </Card> 
            </Grid> 
            <Grid item xs={12} lg={4}>
                <Card variant="outlined" className={classes.formControl}>
                    <CardContent>
                        <form className={classes.root} autoComplete='off'>
                            <TextField
                                id='outlined-basic'
                                required
                                type='text'
                                label='Link del certificado'
                            />
                            <TextField
                                id='outlined-basic'
                                required
                                type='text'
                                label='Link de una evidencia'
                            />
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
	);
}
