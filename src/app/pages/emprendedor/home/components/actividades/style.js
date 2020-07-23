import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      
      //width: '100%',
      backgroundColor: theme.palette.background.paper,
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    content: {
      padding: "0",
    },
    title: {
      textAlign: 'center',
            paddingBottom: theme.spacing(2),
            fontWeight: 'bold',
    },

  }),
);
