import React, { useState}  from 'react';
import style from './style';
import { List, ListItem, 
    ListItemSecondaryAction, IconButton, ListItemIcon,
    ListItemText, CardHeader,Divider,Card,CardContent, ListSubheader, Typography} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
const palabras = {encabezado: "Notificaciones"};

export default function Home () {

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

//CardHeader,Divider,Card,CardContent
    return (

        <Card>
            <CardContent className={classes.content}>
            <List className={classes.root}>
            <ListSubheader>{palabras.encabezado}</ListSubheader>
            <Divider/>
            
            {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                return (
                    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                        
                        <ListItemText id={labelId} primary={`Notificacion ${value + 1}`} />
                        <ListItemIcon>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>
                );
            })}
        </List>

            </CardContent>
        </Card>
        
    )
}