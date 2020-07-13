import React from 'react';

import style from './style';

const initData = { srcImg: 'assets/logocolor.svg' };

export default function Image() {
	const classes = style();
	return (
		<img className={classes.img} src={initData.srcImg} alt='EmprendeGYe' />
	);
}
