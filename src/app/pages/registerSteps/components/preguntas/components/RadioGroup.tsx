import React from 'react'
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

export default function RadioGroup2({ data }: { data: any }) {

  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <RadioGroup aria-label="p1" name="p1" value={value} onChange={handleChange}>
      <FormControlLabel value="op1" control={<Radio />} label={data[0]} />
      <FormControlLabel value="op2" control={<Radio />} label={data[1]} />
      <FormControlLabel value="op3" control={<Radio />} label={data[2]} />
    </RadioGroup>
  )
}
