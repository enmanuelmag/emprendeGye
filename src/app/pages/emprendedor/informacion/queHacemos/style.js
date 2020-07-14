import { makeStyles } from '@material-ui/core';
//import { SketchPicker } from 'react-color';


export default makeStyles((theme) => ({
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
      },
  
      info:{
        paddingTop:"3%",
        textAlign:"justify",
        lineHeight: '200%',
        //fontSize:'17px',
      },
      img: {
        width: '95%',
        marginTop:"3%",
        marginLeft:'5%',
	    },
  
}));
