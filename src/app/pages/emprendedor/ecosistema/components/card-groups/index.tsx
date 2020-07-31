import React from 'react';

import Page from './page';

import { ItemsGroupForum } from '@interfaces/emprendedor';

export default function index({ items }: { items: ItemsGroupForum[] }) {
  return <Page items={items} />;
}
