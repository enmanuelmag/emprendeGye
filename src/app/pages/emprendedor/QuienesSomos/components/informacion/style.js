import { makeStyles } from '@material-ui/core/styles';
import { SketchPicker } from 'react-color';



export default makeStyles((theme) => ({
    root: {
      maxWidth: 530,
      marginLeft:'7%',
      marginTop: '23%',
    },

    typography:{
      textAlign: 'center',
      fontFamily: 'Playfair Display',
      color:'#A8A7A7',
      fontSize:'2rem',
      fontWeight:'bold',
    },

    info:{
      paddingTop:"3%",
      textAlign:"justify",
      lineHeight: '200%',
      fontSize:'17px',
      fontFamily:'Roboto',
      
    },

    boton:{
      marginTop: '2%',
      fontSize:'17px',
      fontFamily:'Roboto',
      marginLeft:'35%',
    },

}));