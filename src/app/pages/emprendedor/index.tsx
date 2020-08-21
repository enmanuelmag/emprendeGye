import React from 'react';

import PageEmprendedor from './page';
import CuentaEmprendedor from './cuenta';
import HerramientasEmprendedor from './herramientas';
import QuienesSomosEmprendedor from './QuienesSomos';
import EcosistemaEmprendedor from './ecosistema';
import NotasEmprendeodr from './notas';
import HomeEmprendedor from './home';
import AprendizajeEmprendedor from './aprendizaje';

export function Page() {
  return <PageEmprendedor />;
}

export function Cuenta() {
  return <CuentaEmprendedor />;
}

export function Ecosistema() {
  return <EcosistemaEmprendedor />;
}

export function Herramientas() {
  return <HerramientasEmprendedor />;
}

export function QuienesSomos() {
  return <QuienesSomosEmprendedor />;
}

export function Notas() {
  return <NotasEmprendeodr />;
}

export function Home() {
  return <HomeEmprendedor />;
}

export function Aprendizaje() {
  return <AprendizajeEmprendedor />;
}
