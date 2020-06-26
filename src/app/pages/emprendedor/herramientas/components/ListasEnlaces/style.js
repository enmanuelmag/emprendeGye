import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        display: 'flex',
        flexWrap: 'wrap',
        width: '80%',
        marginLeft: theme.spacing(6),
      },
    },

    typography: {
      paddingLeft:'25%',
      paddingTop: '8%',
    },

    
  }),
);


  