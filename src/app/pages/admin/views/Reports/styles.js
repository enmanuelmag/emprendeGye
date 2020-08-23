import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 1127,
        position: 'relative',
        minHeight: 200,
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
      title: {
        textAlign: 'center',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(2),
        fontWeight: 'bold',
      },
      gridGraphic:{
          minHeight: "500px"
      }

  })
);