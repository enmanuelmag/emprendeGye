import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        backgroundColor: "blue",
      },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    typographyLink : {//typographyLink
      display: 'flex',
        //marginLeft: theme.spacing(2),
    },
    divLinkL: {
        //display: "inlineBlock",
        marginLeft: 0,
        marginRight: 'auto',
    },
    divLinkR: {
        marginLeft: 'auto',
        marginRight: 0,
    },
    link: {
        margin: theme.spacing(2),
        color: 'inherit',
        variant: 'body2'
    },
    center: {
        textAlign: 'center',
    }

  }),
);
