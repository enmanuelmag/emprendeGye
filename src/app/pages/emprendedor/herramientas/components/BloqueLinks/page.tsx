import React from 'react';
import style from './style';
import {Button} from '@material-ui/core';;

interface Tipos{srcLink: string, srcImg: string , alt:string};
interface Props{array:Tipos[]};


export default function ListLinks(props:Props) {
  const classes = style();
  

  return (
    <div className={classes.root}>
      
      {props.array.map((element:Tipos)=>(
        <Button variant="outlined" href={element.srcLink}  target="_blank" size="large" >
      <img className={classes.img} src={element.srcImg} alt={element.alt} /> 
      </Button>
      ))
      }

    </div>
  );
}



