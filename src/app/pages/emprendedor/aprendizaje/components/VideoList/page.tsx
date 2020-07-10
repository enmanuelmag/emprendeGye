import React from 'react';
import style from './style';


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
                <div className={classes.root}>
                <div className={classes.gridList} >
                  {aprender.links.map((elemento, indice) => (
                    <div className={classes.gridListTile} key={`${indice}`} >
                            <iframe title={`${indice}`} className={classes.iframe}
                                src={elemento} 
                                allowFullScreen = {true}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                >
                        </iframe>
                    </div>
                  ))}
                </div>
               
              </div>

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