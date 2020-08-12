import React from 'react';

import Page from './page';

import { ItemsPeople } from '@interfaces/emprendedor';

export default function index({ items }: { items: ItemsPeople[] }) {
  return <Page items={items} />;
}
