import { makeStyles } from '@material-ui/core';
//import { SketchPicker } from 'react-color';


export default makeStyles((theme) => ({
    
    root: {
        width: '100%',
        paddingTop: theme.spacing(3),
		    paddingBottom: theme.spacing(1),
		    paddingLeft: theme.spacing(2),
		    paddingRight: theme.spacing(2),
        //maxWidth: '36ch',
        //backgroundColor: theme.palette.background.paper,
      },
      inline: {
        display: 'inline',
      },
      avatar: {
        variant: "square",
        sizes: 'medium'
      },
      list:{
        width: '100%',
      },
      title: {
        textAlign: 'center',
            paddingBottom: theme.spacing(2),
            fontWeight: 'bold',
      }
      

}));
