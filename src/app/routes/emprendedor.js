import React from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom'
import {Page, Cuenta, Herramientas,QuienesSomos, Ecosistema} from '../pages/emprendedor'


export default function home() {


    return (
        <Router >
            <Route path="/emprendedor" component={Page} />
            <Route path="/emprendedor/cuenta" component={Cuenta} />
            <Route path="/emprendedor/herramientas" component={Herramientas} />
            <Route path="/emprendedor/quienes_somos" component={QuienesSomos} />
      	     <Route path='/emprendedor/ecosistema' component={Ecosistema}></Route>
        </Router>
        
    )

}
/*<IndexRoute component={Home} />
                <Route path="home" component={Home} />
                <Route path="about" component={About} />
                <Route path="contact" component={Contact} />*/
