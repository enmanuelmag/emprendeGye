import React, { useState}  from 'react';
import style from './style';
import { List, ListItem, 
    ListItemIcon,
    ListItemText, Checkbox, ListSubheader, Typography} from '@material-ui/core';

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


    return (
        <List className={classes.root}>
            <ListSubheader component="div" id="nested-list-subheader">
            <Typography>
                {palabras.encabezado}
            </Typography>
            </ListSubheader>
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
                        <ListItemText id={labelId} primary={`Notificacion ${value + 1}`} />
                    </ListItem>
                );
            })}
        </List>
    )
}