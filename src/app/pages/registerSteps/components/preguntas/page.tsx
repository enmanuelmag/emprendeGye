import React from 'react'
import style from './style';
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function Page() {
    const classes = style();

    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const opciones = [  "Por ahora solo pero eventualemente espero incorporar más personas",
                        "Somos 10 o menos",
                        "Somos más de 10",
                        "Necesito hacerlo para atraer a mis clientes",
                        "Me comunico más por redes sociales",
                        "Tengo que habalar con mis clientes solo al momento de cerrar la venta",
                        "Sí, Scrum",
                        "Sí, Ágil",
                        "No, desconozco qué es una metodoloǵia de gestión de proyectos",
                        "Me enfurezco o me deprimo",
                        "No me ha tocado pasar por obstáculos",
                        "No lo soluciono, voy por lo más fácil",
                        "Pido ayuda"]

    return (
        <Grid container xs={12} className={classes.container}>
            <Grid item xs={12} lg={12}>
            <Typography variant="h4" align="center" display='block' className={classes.title}>
                Preguntas
            </Typography>
            </Grid>
            <Grid item lg={2}></Grid>
            <Grid item lg={8} className={classes.section2}>
                <Card variant="outlined">
                    <CardContent className={classes.formControl}>
                        <Grid item xs={12} className={classes.section}>
                            <Typography variant="subtitle1" display='block' className={classes.bold}>
                                ¿Es su emprendimiento, está solo o tiene equipo?
                            </Typography>
                            <form className={classes.root} autoComplete='off'>
                                <FormControl component="fieldset">
                                    <RadioGroup aria-label="p1" name="p1" value={value} onChange={handleChange}>
                                        <FormControlLabel value="op1" control={<Radio />} label={opciones[0]} />
                                        <FormControlLabel value="op2" control={<Radio />} label={opciones[1]} />
                                        <FormControlLabel value="op3" control={<Radio />} label={opciones[2]} />
                                    </RadioGroup>
                                </FormControl>
                            </form>
                        </Grid>
                        <Grid item xs={12} className={classes.section}>
                            <Typography variant="subtitle1" display='block' className={classes.bold}>
                                ¿Qué tan necesario es para usted hablar en público?
                            </Typography>
                            <form className={classes.root} autoComplete='off'>
                                <FormControl component="fieldset">
                                    <RadioGroup aria-label="p2" name="p2" value={value} onChange={handleChange}>
                                        <FormControlLabel value="op4" control={<Radio />} label={opciones[3]} />
                                        <FormControlLabel value="op5" control={<Radio />} label={opciones[4]} />
                                        <FormControlLabel value="op6" control={<Radio />} label={opciones[5]} />
                                    </RadioGroup>
                                </FormControl>
                            </form>
                        </Grid>
                        <Grid item xs={12} className={classes.section}>
                            <Typography variant="subtitle1" display='block' className={classes.bold}>
                                ¿Tiene alguna metodología de gestión de proyectos?
                            </Typography>
                            <form className={classes.root} autoComplete='off'>
                                <FormControl component="fieldset">
                                    <RadioGroup aria-label="p3" name="p3" value={value} onChange={handleChange}>
                                        <FormControlLabel value="op7" control={<Radio />} label={opciones[6]} />
                                        <FormControlLabel value="op8" control={<Radio />} label={opciones[7]} />
                                        <FormControlLabel value="op9" control={<Radio />} label={opciones[8]} />
                                    </RadioGroup>
                                </FormControl>
                            </form>
                        </Grid>
                        <Grid item xs={12} className={classes.section}>
                            <Typography variant="subtitle1" display='block' className={classes.bold}>
                                Cuando encuentra dificultades u obstáculos en su emprendimiento, ¿cómo reacciona?
                            </Typography>
                            <form className={classes.root} autoComplete='off'>
                                <FormControl component="fieldset">
                                    <RadioGroup aria-label="p4" name="p4" value={value} onChange={handleChange}>
                                        <FormControlLabel value="op10" control={<Radio />} label={opciones[9]} />
                                        <FormControlLabel value="op11" control={<Radio />} label={opciones[10]} />
                                        <FormControlLabel value="op12" control={<Radio />} label={opciones[11]} />
                                    </RadioGroup>
                                </FormControl>
                            </form>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={2}></Grid>
        </Grid>
    )
}
