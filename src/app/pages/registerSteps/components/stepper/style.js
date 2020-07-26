import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
        flexGrow: 1
    },
    button: {
        display: 'block',
        margin: 'auto'
    }
    // instructions: {
    //     marginTop: theme.spacing(1),
    //     marginBottom: theme.spacing(1),
    // },
}));