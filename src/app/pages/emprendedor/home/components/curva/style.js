import { makeStyles, createStyles } from '@material-ui/core';


export default makeStyles((theme) =>
  createStyles({
    card: {
      width: "100%"
    },
    content: {

      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    titulo: {
      textAlign: 'center',
      paddingBottom: theme.spacing(2),
      fontWeight: 'bold',
    }

  }),
);
