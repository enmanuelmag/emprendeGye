import React from 'react';

import style from './style';

const initData = { srcImg: 'assets/avatar.png' };

export default function page() {
	const classes = style();
	return (
		<img className={classes.img} src={initData.srcImg} alt='Foto del usuario' />
	);
}
