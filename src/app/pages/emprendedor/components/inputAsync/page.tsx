import React from 'react';
import fetch from 'cross-fetch';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {CircularProgress, TextField, Grid} from '@material-ui/core';
import style from './style';

interface CountryType {
    name: string;
}

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export default function Page() {
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
            const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
            await sleep(1e3); // For demo purposes.
            const countries = await response.json();
      
            if (active) {
              setOptions(Object.keys(countries).map((key) => countries[key].item[0]) as CountryType[]);
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
        <Autocomplete
            id="asynchronous-demo"
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <Grid container className={classes.search}>
                    <Grid item>
                        <SearchIcon />
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.searchBar}
                            {...params}
                            placeholder="Buscar..."
                            // variant="outlined"
                            InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                            }}
                        />
                    </Grid>
                </Grid>
            )}
        />
    )
}
