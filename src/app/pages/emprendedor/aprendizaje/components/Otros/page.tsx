import React, { useState } from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import style from './style';
import {
    List, ListItem, Link,
    ListItemSecondaryAction, ListItemIcon,
    ListItemText, CardHeader, Divider, Card, CardContent, ListSubheader
} from '@material-ui/core';


interface SubProps {
    name: string;
    links: Array<string>;
}

interface Props {
    aprender: SubProps;
}


export default function Home({ aprender }: Props)  {
    const classes = style();

    const [checked, setChecked] = useState([0]);

    
    return (
        <Card>
            <CardContent className={classes.content}>
                <List className={classes.root}>
                    <ListSubheader>{aprender.name}</ListSubheader>
                    <Divider />
                    {aprender.links.map((elemento: string, indice) => (
                    <ListItem role={undefined} dense button>
                                
                                    <ListItemText key={`${indice}`}>
                                        <Typography className={classes.typographyLink}>
                                            <Link className={classes.link} href={elemento} >
                                                {elemento}
                                            </Link>
                                        </Typography>
                                    </ListItemText>
                                
                    </ListItem>))}
                </List>

            </CardContent>
        </Card>

    )
}