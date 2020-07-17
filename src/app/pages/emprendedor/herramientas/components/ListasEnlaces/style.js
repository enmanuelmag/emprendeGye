import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        //marginTop:'1%',
        display: 'flex',
        flexWrap: 'wrap',
        width: '80%',
        //marginLeft: theme.spacing(5),
      },
    },    
  }),
);


  