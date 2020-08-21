import React from 'react';

import CardPeople from './card';

import { ItemsPeople } from '@interfaces/emprendedor';
import style from './style';
import { Grid, TextField, CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface CountryType {
  name: string;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Page({ items }: { items: ItemsPeople[] }) {
  const classes = style();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<CountryType[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(
        'https://country.register.gov.uk/records.json?page-size=5000'
      );
      await sleep(2000); // For demo purposes.
      const countries = await response.json();

      if (active) {
        setOptions(
          Object.keys(countries).map(
            (key) => countries[key].item[0]
          ) as CountryType[]
        );
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <React.Fragment>
      <Grid
        container
        spacing={6}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.grid}
      >
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={6}
          >
            <Grid item xs={5}>
              <Autocomplete
                id="asynchronous-demo"
                fullWidth
                open={open}
                onOpen={() => {
                  setOpen(true);
                }}
                onClose={() => {
                  setOpen(false);
                }}
                getOptionSelected={(option, value) =>
                  option.name === value.name
                }
                getOptionLabel={(option) => option.name}
                options={options}
                loading={loading}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Buscar"
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {loading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid
            container
            spacing={6}
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.grid}
          >
            {items.map((item, index) => {
              return (
                <Grid item xs={12} md={12} lg={12}>
                  <CardPeople item={item} index={index} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}