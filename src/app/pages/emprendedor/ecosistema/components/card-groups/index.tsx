import React from 'react';

import Page from './page';

import { ItemsGroupForum } from '@interfaces/emprendedor';

export default function index({
	index,
	item,
}: {
	index: number;
	item: ItemsGroupForum;
}) {
	return <Page index={index} item={item} />;
}
