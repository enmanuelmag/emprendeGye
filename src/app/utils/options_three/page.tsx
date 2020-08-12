import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import { FormControl, FormControlLabel } from '@material-ui/core';
import { Radio, RadioGroup } from '@material-ui/core';
import style from './style';

export default function Page({data}: {data:{question:String,
                                            options:string[]}}) {
    const classes = style();

    const dataQuestions = data;
    const question = dataQuestions.question;
    const options = dataQuestions.options;
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <Grid item xs={12} className={classes.section}>
            <Typography variant="subtitle1" display='block' className={classes.bold}>
                {question}
            </Typography>
            <form className={classes.root} autoComplete='off'>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="qst" name="qst" value={value} onChange={handleChange}>
                        {options.map((option, index) => {
                            return <FormControlLabel value={"op"+index} control={<Radio />} label={option} />;
                        })}
                    </RadioGroup>
                </FormControl>
            </form>
        </Grid>
    )
}
