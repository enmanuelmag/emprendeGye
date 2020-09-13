import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent } from '@material-ui/core';
import style from './style';

export default function Page({ data } : { data: any }) {
    const classes = style();
    
    return (
        <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
                <Bar
                    data = {data}
                    options = {{
                        title: {
                            display: true,
                            text: 'Asesorías por año',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    offsetGridLines: true
                                }
                            }],
                            // yAxes: [{
                            // stacked: true,
                            // }]
                        },
                    }}
                />
        </CardContent>
    </Card>
    )
}