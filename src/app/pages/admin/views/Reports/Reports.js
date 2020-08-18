import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography as MuiTypography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Reports = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
    </div>
  );
};

export default Reports;
