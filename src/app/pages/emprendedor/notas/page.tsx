import React from 'react';
import Board from 'react-trello';
import data from './data.json';

import style from './style';

export default function Page() {
  const classes = style();
  return (
    <Board
      className={[classes.board]}
      data={data}
      editLaneTitle
      draggable
      editable
      collapsibleLanes
      canAddLanes
    />
  );
}
