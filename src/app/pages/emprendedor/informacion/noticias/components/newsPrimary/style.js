import { makeStyles, createStyles } from '@material-ui/core';
//import { SketchPicker } from 'react-color';
export default makeStyles((theme) =>
  createStyles({
     
    root: {
      paddingTop: theme.spacing(3),
		  paddingBottom: theme.spacing(1),
		  paddingLeft: theme.spacing(2),
		  paddingRight: theme.spacing(2),
      width: '85%',
      zIndex: '-1',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    img:{
      width: '100%',
      zIndex: '-1',
      //height: "auto",
    },
    gridTile: {
      listStyle: 'none',
      padding: '5px'
    },
    title: {
      textAlign: 'center',
          paddingBottom: theme.spacing(2),
          fontWeight: 'bold',
    }

  }),
);
