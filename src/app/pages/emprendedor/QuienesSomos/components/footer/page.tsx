import React from 'react';
import style from "./style";
import imagePathfooter from './assets/logofoot.svg';
import Typography from '@material-ui/core/Typography';

export default function page() {
    const classes = style();

    return (
        <div className={classes.root}>
            <div className={classes.contenido}>

                <img className={classes.imagen} src={imagePathfooter} alt='Logo EmprendeGye' />

                <div className={classes.columna}>
                    <Typography variant="h6">
                        COLABORACIONES
                    </Typography>

                    <Typography variant="body2">
                        <ul className={classes.lista}>
                            <li>Diana Molina Torres</li>
                            <li>Enmanuel Magallanes Pinagorte</li>
                            <li>Josué Cobos Salvador</li>
                            <li>Paulette Vásquez Matute</li>
                        </ul>
                    </Typography>
                </div>

                <div className={classes.columna2}>
                    <Typography variant="h6">
                        CONTACTOS
                    </Typography>

                    <Typography variant="body2">
                        <ul className={classes.lista}>
                            <li>fmagalla@espol.edu.ec</li>
                            <li>dianmoli@espol.edu.ec</li>
                            <li>jcoboss@espol.edu.ec</li>
                            <li>jpvasque@espol.edu.ec</li>
                        </ul>
                    </Typography>
                </div>
            </div>

            <div className={classes.foot}>
                <Typography variant="body1"> EmprendeGye® todos los derechos reservados.2020. </Typography>
            </div>

        </div>
    );
}