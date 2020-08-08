import React from 'react'

import Page from './page';
import dataAlert from './datosAlert';

export default function index() {
    const dataAlerts = dataAlert;
    const academico = dataAlerts['academico'];
    const aprendizaje = dataAlerts['aprendizaje'];
    const certificaciones = dataAlert['certificaciones'];
    const data = {academico, aprendizaje, certificaciones};
    return <Page data={data}/>;
}
