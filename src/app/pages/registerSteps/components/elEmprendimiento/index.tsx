import React from 'react'

import Page from './page';
import dataAlert from './datosAlert';

export default function index() {
    const dataAlerts = dataAlert;
    const categoria = dataAlerts['categoria'];
    const alcance = dataAlerts['alcance'];
    const impacto = dataAlert['impacto'];
    const tiempo = dataAlert['tiempo'];
    const data = {categoria, alcance, impacto, tiempo};
    return <Page data={data}/>;
}
