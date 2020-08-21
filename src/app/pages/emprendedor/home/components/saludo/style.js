import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      padding: '10px',
    //   variant: 'outlined',
    //   raised: "true",
    //   elevation: '5',

    },
    typographyBody: {
      fontWeight: 'bold',
    //   fontStyle: 'italic'
    }

  }),
);
