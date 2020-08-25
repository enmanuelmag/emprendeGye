import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  Typography,
  AppBar,
  Tabs,
  Box,
  Tab,
} from '@material-ui/core';

import SwipeableViews from 'react-swipeable-views';
import CardPeople from './components/card-people';
import CardGroups from './components/card-groups';

import { EnvGroupForum, EnvPeople } from '@interfaces/emprendedor';

import style from './style';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Page({ data }: { data: any }) {
  const classes = style();
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const people: EnvPeople = data['people'];
  const gruopFroums: EnvGroupForum = data['gruopFroums'];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={classes.tab} label={people.title} {...a11yProps(0)} />
          <Tab
            className={classes.tab}
            label={gruopFroums.title}
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <CardPeople items={people.items} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CardGroups items={gruopFroums.items} />
        </TabPanel>
      </SwipeableViews>
    </React.Fragment>
  );
}
