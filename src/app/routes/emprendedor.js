import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {
  Page,
  Cuenta,
  Herramientas,
  QuienesSomos,
  Ecosistema,
  Notas,
  Home,
  Aprendizaje,Contactanos,Noticias,QueHacemos
} from '../pages/emprendedor';

export default function home() {
  return (
    <Router>
      <Route path="/emprendedor" component={Page} />
      <Route path="/emprendedor/home" component={Home} />
      <Route path="/emprendedor/cuenta" component={Cuenta} />
      <Route path="/emprendedor/herramientas" component={Herramientas} />
      <Route path="/emprendedor/quienes_somos" component={QuienesSomos} />
      <Route path="/emprendedor/ecosistema" component={Ecosistema}></Route>
      <Route path="/emprendedor/notas" component={Notas}></Route>
      <Route path="/emprendedor/aprendizaje" component={Aprendizaje} />
      <Route path="/emprendedor/contactanos" component={Contactanos} />
      <Route path='/emprendedor/noticias' component={Noticias}/>
      <Route path='/emprendedor/que_hacemos' component={QueHacemos}/>
    </Router>
  );
}
/*
*/