import React from 'react';
import style from './style';
import {Button,Typography} from '@material-ui/core';;

const consul1 = { srcImg: 'https://angeles.ec/wp-content/uploads/2018/10/Logo-Angeles-Ec.png' , srcLink:'https://angeles.ec/'};
const consul2 = { srcImg: 'http://www.aei.ec/wp-content/uploads/2020/02/logo-header.png', srcLink:'http://www.aei.ec/'}; 
const consul3 = { srcImg: 'https://bancopacificoprensa.ec/wp-content/uploads/2017/12/BdP4.png', srcLink:'https://www.bancodelpacifico.com/personas/inicio'};

export default function ListLinksInv() {
  const classes = style();

  return (
    <div className={classes.root}>
            <div className={classes.typography}>
                <Typography variant='h5'>Inversión</Typography>
            </div>
      
      <Button variant="outlined" href={consul1.srcLink}  target="_blank" size="large" >
      <img className={classes.img} src={consul1.srcImg} alt='Angeles_ec' /> 
      </Button>

      <Button variant="outlined"  href={consul2.srcLink}  target="_blank" size="large" >
          <img className={classes.img} src={consul2.srcImg} alt='Alianza_emprendiemiento' />
      </Button>
      
      <Button variant="outlined" href={consul3.srcLink}  target="_blank" size="large" >
           <img className={classes.img} src={consul3.srcImg} alt='Banco_Pacifico' />
      </Button>

    </div>
  );
}



