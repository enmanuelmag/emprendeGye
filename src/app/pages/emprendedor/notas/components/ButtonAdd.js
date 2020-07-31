import React, { Component } from 'react';
/* import { storiesOf } from '@storybook/react';
 */
import Board from 'react-trello';
import { Button, Grid } from '@material-ui/core';

export default class NewLaneForm extends Component {
  render() {
    const { onCancel, t } = this.props;
    const handleAdd = () => this.props.onAdd({ title: this.inputRef.value });
    const setInputRef = (ref) => (this.inputRef = ref);
    return (
      <Grid contianer>
        <Grid item xs={12}>
          <input
            ref={setInputRef}
            placeholder={t('placeholder.title')}
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAdd}>
            {t('button.Add lane')}
          </Button>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={onCancel}>
              {t('button.Cancel')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

/* storiesOf('Custom Components', module).add('NewLaneForm', () => (
  <Board editable canAddLanes components={{ NewLaneForm: NewLaneForm }} />
)); */
