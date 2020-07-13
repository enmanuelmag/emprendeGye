import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    typographyTitle: {
      variant: 'h6'
    },
    root: {
      
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    content: {
      padding: "0",
    },
    title: {
      variant: "h5",
    },
    rootList:{
      padding: '0px',
      spacing: '1px',
    },
    listItem: {
      width: '100%',
      padding: '2px',
    }


  }),
);
