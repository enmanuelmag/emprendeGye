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
}))
