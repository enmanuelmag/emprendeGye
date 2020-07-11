import React, { useState}  from 'react';
import style from './style';
import { List, ListItem, 
    ListSubheader, IconButton,ListItemIcon,
    ListItemText, CardHeader,Divider,Card,CardContent,} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FeedBackCard from '../feedbackCard';
const palabras = {encabezado: "Retroalimentación"};

export default function Home ({peopleCard}:any) {

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
        <Card>
            
            <CardContent className={classes.content}>
            <List className={classes.root}>
            <ListSubheader>{palabras.encabezado}</ListSubheader>
            {peopleCard.peopleCard.map((value:any, indice:number ) => 
                //const labelId = `checkbox-list-label-${value}`;
                (
                    <ListItem key={indice} role={undefined} dense >
                        <FeedBackCard personCard={value}/>
                    </ListItem>
                )
            )}
            </List>

            </CardContent>
        </Card>
    )
}