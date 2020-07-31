import React from 'react';

import Page from './page';

import { ItemsPeople } from '@interfaces/emprendedor';

export default function index({
	index,
	item,
}: {
	index: number;
	item: ItemsPeople;
}) {
	return <Page index={index} item={item} />;
}
