import React from 'react'
import style from './style';
import { Grid, Typography } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';
import Options from '../../../../utils/options';

export default function Page({data} : {data:any}) {
    const classes = style();

    const dataQuestions = data;

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
                        <Grid container>
                            {Object.keys(dataQuestions).map((q) => {
                                const question = dataQuestions[q];
                                return <Options data={question}/>;
                            })}
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={2}></Grid>
        </Grid>
    )
}
