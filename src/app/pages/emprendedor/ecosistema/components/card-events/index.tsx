import React from 'react';

import Page from './page';

import { ItemsEvents } from '@interfaces/emprendedor';

export default function index({
	index,
	item,
}: {
	index: number;
	item: ItemsEvents;
}) {
	return <Page index={index} item={item} />;
}
