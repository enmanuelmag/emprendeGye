import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
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
}