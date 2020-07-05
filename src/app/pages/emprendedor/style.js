import { createStyles, makeStyles } from '@material-ui/core/styles';
import { SketchPicker } from 'react-color';

export default makeStyles((theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        marginBottom:0,
       
      },
    
    typographyLink : {
        //marginLeft: theme.spacing(2),
    },
    divLinkR: {
        marginLeft: 'auto',
        marginRight: 0,
    },
    link: {
        margin: theme.spacing(2),
        color: 'inherit',
        variant: 'body2',
        fontFamily:'roboto',
    },

    barra:{
      background:'#16244b',
    },

    img: {
      width: '10%',
    },
  }),
);
