import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';

export default makeStyles((theme) =>
  createStyles({
    button: {
      minHeight: '100%',
      minWidth: '100%',
      padding: '0',
      fontSize: '20px',
    },
    imagen: {
      width: '40%',
      height: '100%',
    },

    app: {
      marginTop: '25px',
    },
    text: {
      fontWeight: 'bold',
      marginTop: '1rem',
    },
  })
);
export const ColorButton = withStyles((theme) => ({
  root: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: '20px',
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: '#cdcdcd',
    },
    flexDirection: 'column',
  },
}))(Button);
