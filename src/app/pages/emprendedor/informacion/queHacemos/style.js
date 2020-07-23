import { makeStyles } from '@material-ui/core';
//import { SketchPicker } from 'react-color';


export default makeStyles((theme) => ({

  root: {
    marginLeft:"10%",
    marginRight:"10%",
    marginTop:"15%",
  },


  media: {
    height: 0,
    paddingTop: '50.25%', // 16:9
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  

  contenedor: {
    margin:"auto",
    
  },
  
  frases1: {
		textAlign: 'center',
        paddingBottom: theme.spacing(2),
        fontWeight: 'bold',
  },
  
  
  info:{
    paddingTop:"3%",
    textAlign:"justify",
    lineHeight: '200%',
    marginLeft:'5%',
    marginRight:'5%',
    textAlign:"justify",
    //fontSize:'17px',
  },

  titulo: {
    paddingTop:"6%",
    marginLeft:"10%",
    marginRight:"10%",
	},

















/*
    root: {
        //maxWidth: 530,
        //marginLeft:'7%',
        //marginTop: '23%',
        padding: "20px"
      },
  
      typography:{
        textAlign: 'center',
        //Este tipo de fuente es solo para los titulos que estan en plomo, ya que con roboto no se veia bien.
        fontFamily: 'Playfair Display',
        color:'#A8A7A7',
        fontSize:'2rem',
        fontWeight:'bold',
        paddingTop:"20%",
      },
  
      info:{
        paddingTop:"0%",
        textAlign:"justify",
        lineHeight: '200%',
        //fontSize:'17px',
      },
      img: {
        width: '95%',
        marginTop:"3%",
        marginLeft:'5%',
<<<<<<< HEAD
	    },*/
=======
      },
      title: {
        textAlign: 'center',
            paddingBottom: theme.spacing(2),
            fontWeight: 'bold',
      },
>>>>>>> 1f0f1165ea073bee62de25ee379fd3e67d40629a
  
}));
