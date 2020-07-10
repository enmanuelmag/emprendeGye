import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import imagePath from './assets/logobarr.svg';
import Informacion from './informacion'
import style from './style';

export default function DenseAppBar() {
    const classes = style();
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
        <div className={classes.root}>
            <AppBar className={classes.barra} position="static">
                <Toolbar variant="dense">
                    <img className={classes.img} src={imagePath} alt='EmprendeGye' />
                    <div className={classes.divLinkR}>

                        <Typography className={classes.typographyLink}>
                            
                            <Link className={classes.link} >
                            <Informacion />
                               
                            </Link>
                            <Link className={classes.link} href='/emprendedor/ecosistema'>
                                Ecosistema
							</Link>

                            <Link className={classes.link} href="./aprendizaje" onClick={preventDefault} >
                                Aprendizaje
                            </Link>

                            <Link className={classes.link} href="/emprendedor/herramientas"  >
                                Herramientas
                                </Link>
                            <Link className={classes.link} href="./notas" onClick={preventDefault} >
                                Notas
                            </Link>

                            <Link className={classes.link} href='/emprendedor/board'>
                                Board
							</Link>

                            <Link className={classes.link} href="/emprendedor/cuenta" >
                                Cuenta
                            </Link>


                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}





