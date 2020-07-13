import React from 'react';
import style from './style';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

interface personCardType{
    nombre: string;
    descripcion: string;
    img: string;
}

export default function Home ({personCard}:any) {

    const classes = style();
    console.log(personCard);

    return (
        <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={personCard.personCard.nombre}
        subheader={personCard.personCard.descripcion}
      />
    </Card>
    )
}