import React from 'react'

import Page from './page';
import questions from './dataQuestions';

export default function index() {
    const data = questions;
    console.table(data);
  return <Page data={data}/>;
}