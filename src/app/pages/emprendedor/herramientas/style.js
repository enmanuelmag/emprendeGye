import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    title: {
      textAlign: 'center',
          paddingBottom: theme.spacing(2),
          fontWeight: 'bold',
    },

    containerList: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      marginTop: "3%",
      //marginLeft: "12%",
    },

    container: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  }),
);