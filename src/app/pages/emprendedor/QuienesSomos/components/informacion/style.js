import { makeStyles } from '@material-ui/core/styles';
//import { SketchPicker } from 'react-color';

export default makeStyles((theme) => ({
    root: {
      margin: "auto",
    },


    frases1: {
      textAlign: 'center',
          paddingBottom: theme.spacing(2),
          fontWeight: 'bold',
          color:'#A8A7A7',
          fontSize:'2rem',
      marginLeft:'7%',
      marginTop: '15%',
    },


    info:{
      paddingTop:"3%",
      textAlign:"justify",
      lineHeight: '200%',
      marginLeft:'5%',
      marginRight:'5%',
      //fontSize:'17px',
    },

  

}));