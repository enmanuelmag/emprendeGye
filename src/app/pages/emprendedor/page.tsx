import React from 'react';
import {AppBar,Toolbar, Typography, Link} from '@material-ui/core';

import style from './style';

export default function DenseAppBar() {
    const classes = style();
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <div className={classes.divLinkL}>
                        <Typography className={classes.typographyLink}>
                            <Link className={classes.link} href="./ecosistema" onClick={preventDefault} >
                                Ecosistema
                            </Link>
                        
                            <Link className={classes.link} href="./aprendizaje" onClick={preventDefault} >
                                Aprendizaje
                            </Link>
                        
                            <Link className={classes.link} href="./herramientas" onClick={preventDefault} >
                                Herramientas
                            </Link>
                        </Typography>
                    </div>
                    <div className={classes.center}>
                        <Typography className={classes.typographyLink}>
                            EmprendeGye
                        </Typography>
                    </div>
                    <div className={classes.divLinkR}>
                        <Typography className={classes.typographyLink}>
                            <Link className={classes.link} href="./notas" onClick={preventDefault} >
                                Notas
                            </Link>
                        
                            <Link className={classes.link} href="/emprendedor/board" >
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