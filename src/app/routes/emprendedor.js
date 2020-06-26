import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {Page, Cuenta, Home } from '../pages/emprendedor'


export default function home() {


    return (
        <Router >
            <Route path="/emprendedor" component={Page} />
            <Route path="/emprendedor/cuenta" component={Cuenta} />
            <Route path="/emprendedor/home" component={Home} />
        </Router>
        
    )

}
/*<IndexRoute component={Home} />
                <Route path="home" component={Home} />
                <Route path="about" component={About} />
                <Route path="contact" component={Contact} />*/
