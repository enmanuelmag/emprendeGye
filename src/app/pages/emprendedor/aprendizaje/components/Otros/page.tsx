import React from 'react';
import { Typography } from '@material-ui/core';
import style from './style';
import {
    List, ListItem, Link,
    ListItemText, Divider, Card, CardContent, ListSubheader
} from '@material-ui/core';


interface SubProps {
    name: string;
    links: Array<ObjectURL>;
}

interface Props {
    aprender: SubProps;
}
interface ObjectURL {
    name: string;
    url: string;
}

export default function Home({ aprender }: Props) {
    const classes = style();

    return (
        <Card className={classes.root}>
            <Typography className={classes.title} variant='h5'>
							Otros Recursos
						</Typography>
            <CardContent className={classes.content}>
                <List className={classes.root}>
                    
                    <Divider />
                    {aprender.links.map((value:ObjectURL, indice) => (
                        <ListItem role={undefined} dense button>
                            <ListItemText key={`${indice}`}>
                                <Typography className={classes.typographyLink}>
                                    <Link className={classes.link} href={value.url} >
                                                {value.name}
                                            </Link>
                                        </Typography>
                                    </ListItemText>
                    </ListItem>))}
                </List>

            </CardContent>
        </Card >

    )
}