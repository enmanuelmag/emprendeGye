import React from 'react';
import Board from 'react-trello';
import data from './data.json';

import style from './style';
import { Container } from '@material-ui/core';

export default function Page() {
  const classes = style();
  return (
    <div className={classes.container}>
      <Board
        className={[classes.board]}
        data={data}
        editLaneTitle
        draggable
        editable
        collapsibleLanes
        canAddLanes
      />
    </div>
  );
}
