import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';

import { Button } from "@material-ui/core";

export default makeStyles((theme) =>
  createStyles({
    button: {
      
        minHeight: '140px',
        minWidth: "100%", 
    },

    imagen: {
      width: '40%',
      //paddingLeft: '7%',
      //marginTop: '2%',
    },

    app: {
      marginTop: "25px",
      //padding: theme.spacing(50),
    }
  }),
);
export const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[700]),
    backgroundColor: indigo[700],
    '&:hover': {
      backgroundColor: indigo[900],
    },
  },
}))(Button);

