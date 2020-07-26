import React from 'react';
import style from './style';
import {
  List,
  Typography,
  ListItem,
  Card,
  CardContent,
} from '@material-ui/core';
import FeedBackCard from '../feedbackCard';
const palabras = { encabezado: 'Notificaciones' };

interface personCardType {
  nombre: string;
  descripcion: string;
  img: string;
}
interface peopleCardType {
  array: Array<personCardType>;
}
export default function Home({ peopleCard }: any) {
  const classes = style();
  //const [checked, setChecked] = useState([0]);

  /*const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    };*/
  //CardHeader,Divider,Card,CardContent
  return (
    <Card className={classes.root} variant='outlined'>
      <Typography className={classes.title} variant="h5">
        {palabras.encabezado}
      </Typography>
      <CardContent className={classes.content}>
        <List className={classes.rootList}>
          {peopleCard.peopleCard.map((value: any, indice: number) => (
            //const labelId = `checkbox-list-label-${value}`;
            <ListItem
              className={classes.listItem}
              key={indice}
              role={undefined}
              dense
              divider
            >
              <FeedBackCard personCard={value} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
/*
<ListItemText id={labelId} primary={`Notificacion ${value + 1}`} />
                        <ListItemIcon>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemIcon>
*/
