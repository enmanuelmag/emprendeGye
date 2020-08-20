import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Grid, Typography, Card, Container } from '@material-ui/core';

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
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
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  },
});

class FloatingActionButtonZoom extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;


    return (
      <div className={classes.root}>
        <Card variant='elevation' elevation={2}>
          <Typography variant="body2" className={classes.title}>
            Seleccione el tipo de reporte que desea generar:
          </Typography>
        </Card>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="REPORTES DE GANANCIAS POR TIPO DE EMPRENDIMIENTO " />
            <Tab label="TOP DE EMPRENDEDORES CON MAYOR FINANCIAMIENTO" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Container className={classes.container} maxWidth={'xl'}>
              <Grid container spacing={4}>

                <Grid item xs={12} md={6} lg={6}>
                  <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      label="Fecha de inicio"
                      type="date"
                      defaultValue="2017-05-24"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      label="Fecha de fin"
                      type="date"
                      defaultValue="2020-02-24"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>

                </Grid>
              </Grid>
            </Container>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Container className={classes.container} maxWidth={'xl'}>
              <Grid container spacing={4}>

                <Grid item xs={12} md={6} lg={4}>
                  <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      label="Fecha de inicio"
                      type="date"
                      defaultValue="2017-05-24"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      label="Fecha de fin"
                      type="date"
                      defaultValue="2020-02-24"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>

                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                <form className={classes.container} noValidate>
                  <TextField
                    id="outlined-number"
                    label="Top deseado"

                    type="number"
                    />
                    </form>
                </Grid>
              </Grid>
            </Container>
          </TabContainer>

        </SwipeableViews>

      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(FloatingActionButtonZoom);
