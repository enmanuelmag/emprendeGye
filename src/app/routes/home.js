import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from '../App';
import Emprendedor from '../routes/emprendedor';
import Login from '../pages/login';
import Register from '../pages/registerSteps';
import Admin from '../pages/admin/App'

export default function home() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/registerSteps" component={Register} />
        <Route path="/emprendedor" component={Emprendedor} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}
