import { makeStyles, createStyles } from '@material-ui/core';
//import { SketchPicker } from 'react-color';


export default makeStyles((theme) =>
  createStyles({
    root: {
        padding: '20px',
        spacing: '3',
        
        direction:"row",
        justify:"center",
        alignItems:"flex-start",
    },
    titulo: {
        variant: 'h6'
        
    }
  }),
);

