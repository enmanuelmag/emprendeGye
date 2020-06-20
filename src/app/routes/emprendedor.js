import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router , Switch} from 'react-router-dom'
import Home from '../pages/emprendedor'
import Cuenta from '../pages/emprendedor/cuenta'


export default function home() {


    return (
        <Router >
            <Route path="/emprendedor" component={Home} />
            <Route path="/emprendedor/cuenta" component={Cuenta} />
        </Router>
        
    )
{/*<IndexRoute component={Home} />
                <Route path="home" component={Home} />
                <Route path="about" component={About} />
                <Route path="contact" component={Contact} />*/}
}
