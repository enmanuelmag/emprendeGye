import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from '../App'
import Emprendedor from '../routes/emprendedor'
export default function home() {


    return (
        <Router >
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/emprendedor" component={Emprendedor} />
            </Switch>
        </Router>
    )
{/*<IndexRoute component={Home} />
                <Route path="home" component={Home} />
                <Route path="about" component={About} />
                <Route path="contact" component={Contact} />*/}
}
