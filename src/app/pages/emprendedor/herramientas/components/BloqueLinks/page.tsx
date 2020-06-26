import React from 'react';
import style from './style';
import {Button,Typography} from '@material-ui/core';;

const consul1 = { srcImg: 'https://enfoquegroup.com/wp-content/uploads/2018/08/logo.png' , srcLink:'https://enfoquegroup.com/'};
const consul2 = { srcImg: 'https://promillan.com.ec/images/yootheme/demo/default/logo.png', srcLink:'http://promillan.com.ec/index.php/empresa'}; 
const consul3 = { srcImg: 'https://pbs.twimg.com/profile_images/705874323672666112/W0YWGNeG_400x400.jpg', srcLink:'http://www2.stratega.com.ec/'};

export default function ListLinks() {
  const classes = style();

  return (
    <div className={classes.root}>
            <div className={classes.typography}>
                <Typography variant='h5'>Consultorías</Typography>
            </div>
      
      <Button variant="outlined" href={consul1.srcLink}  target="_blank" size="large" >
      <img className={classes.img} src={consul1.srcImg} alt='EnfoqueGroup' /> 
      </Button>

      <Button variant="outlined"  href={consul2.srcLink}  target="_blank" size="large" >
          <img className={classes.img} src={consul2.srcImg} alt='Promillan' />
      </Button>
      
      <Button variant="outlined" href={consul3.srcLink}  target="_blank" size="large" >
           <img className={classes.img} src={consul3.srcImg} alt='Stratega' />
      </Button>

    </div>
  );
}



