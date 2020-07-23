import React from 'react';
import style from './style';
import {Grid} from "@material-ui/core";

interface SubProps {
        name: string;
        links: Array<string>;
}

interface Props {
        aprender: SubProps;
}

export default function home({aprender} : Props) {
        const classes = style();

        return (
                //<div className={classes.root}>
                <Grid  className={classes.root} container item spacing={3} justify="flex-start"
                alignItems="flex-start">
                  {aprender.links.map((elemento, indice) => (
                    <Grid item xs={12} md={5} key={`${indice}`} >
                            <iframe title={`${indice}`} className={classes.iframe}
                                src={elemento} 
                                allowFullScreen = {true}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                >
                        </iframe>
                    </Grid>
                  ))}
                </Grid>
               
              //</div>

        )
}
/*
 <iframe title='jol' width="560" height="315" 
                frameBorder={0}
                src="https://www.youtube.com/embed/94C3GaurHLk" 
                allowFullScreen = {true}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                >
                        </iframe>
*/