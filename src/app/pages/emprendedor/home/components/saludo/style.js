import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      border: "1px solid rgba(0, 0, 0, 0.23)",
      textAlign: 'center',
      padding: '10px',
      variant: 'outlined',
      raised: "true",
      elevation: '5',

    },
    typographyBody: {
      variant: 'h4'
    }

  }),
);
