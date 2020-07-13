import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    typography: {
      paddingLeft:'38%',
      paddingTop: '8%',
    },    

    containerList: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }),
);