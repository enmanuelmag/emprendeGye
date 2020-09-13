import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({ 
    contPrincipal: {
        padding: 50
    },
    container: {
        paddingTop: theme.spacing(4),
    },
    center: {
        justifyContent: 'center',
    },
    plot: {
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
        },
    }
  }),
);
