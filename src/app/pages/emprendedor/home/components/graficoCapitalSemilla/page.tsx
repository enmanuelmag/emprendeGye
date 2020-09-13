import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent } from '@material-ui/core';
import style from './style';

export default function Page({ data } : { data: any }) {
    const classes = style();
    
    return (
        <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
                <Doughnut
                    data = {data}
                    options = {{
                        title: {
                            display: true,
                            text: 'Histórico de emprendimientos por Capital Semilla',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                    }}
                />
        </CardContent>
    </Card>
    )
}