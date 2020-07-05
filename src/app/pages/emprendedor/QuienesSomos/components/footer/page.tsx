import React from 'react';
import style from "./style";
import imagePathfooter from './assets/logofoot.svg';

export default function page() {
    const classes = style();

    return (
        <div className={classes.root}>
            <div className={classes.contenido}>

                <img className={classes.imagen} src={imagePathfooter} alt='Logo EmprendeGye' />

                <div className={classes.columna}>
                    <h4>COLABORACIONES</h4>
                    <ul className={classes.lista}>
                        <li>Diana Molina Torres</li>
                        <li>Enmanuel Magallanes Pinagorte</li>
                        <li>Josué Cobos Salvador</li>
                        <li>Paulette Vásquez Matute</li>
                    </ul>
                </div>

                <div className={classes.columna2}>
                    <h4>CONTACTOS</h4>
                    <ul className={classes.lista}>
                        <li>dianmoli@espol.edu.ec</li>
                        <li>dianmoli@espol.edu.ec</li>
                        <li>dianmoli@espol.edu.ec</li>
                        <li>dianmoli@espol.edu.ec</li>
                    </ul>
                </div>
            </div>

            <div className={classes.foot}>
                EmprendeGye® todos los derechos reservados.2020.
            </div>

        </div>
    );
}