import { makeStyles } from '@material-ui/core';
//import { SketchPicker } from 'react-color';


export default makeStyles((theme) => ({
    
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        width: 'auto',
        //height: 450,
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
      img:{
        width: 'auto',
        //height: "auto",
      }

}));
