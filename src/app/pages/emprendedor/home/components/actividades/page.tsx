import React, { useState } from 'react';
import style from './style';
import {
    List, ListItem,
    ListItemIcon,
    ListItemText,
    Checkbox,
    Card,
    Typography,
    CardContent,
} from '@material-ui/core';

const palabras = { encabezado: "Actividades" };

export default function Home() {

    const classes = style();
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    return (
        <Card className={classes.root }>
            <Typography className={classes.title} variant='h5'>
							{palabras.encabezado}
				</Typography>
            <CardContent className={classes.content}>
            <List className={classes.root}>
            
            
                    {[0, 1, 2, 3].map((value) => {
                        const labelId = `checkbox-list-label-${value}`;
                        return (
                            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                            </ListItem>
                        );
                    })}
                </List>

            </CardContent>
        </Card>

    )
}