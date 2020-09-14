import React from 'react';
import style from './style';

import { Grid, Typography, Container, Button } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

import FormAccountInfo from './components/formAccountInfo';
import FormBasicInfo from './components/formBasicInfo';
import Image from './components/image';

export default function Page() {
    const classes = style();

	return (
        <Container maxWidth={'lg'} className={classes.root}>
            <Grid container item xs={12} lg={12} className={classes.border}
            justify="center" spacing={3}>
                <TableContainer className={classes.table}>
                    <Table aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                <TableCell align={'center'}>
                                    <Typography variant='h5' className={classes.title}>
                                        Perfil público
                                    </Typography>
                                    <Typography variant='body1'>
                                        Añade información sobre ti
                                    </Typography>
                                    <Image/>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <FormBasicInfo/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <FormAccountInfo />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Button variant='contained' color='primary'
                                            className={classes.center}>
                                        Guardar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Container>
	);
}
