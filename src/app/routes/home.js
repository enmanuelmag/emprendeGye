import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import App from '../App';
import Emprendedor from '../routes/emprendedor';
import Login from '../pages/login';
import Register from '../pages/registerSteps';
import { RouteWithLayout } from '../pages/admin/components';

import {
  Main as MainLayout,
  Minimal as MinimalLayout,
} from '../pages/admin/layouts';

import {
  Dashboard as DashboardView,
  Reports as ReportsView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
} from '../pages/admin/views';

export default function home() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/registerSteps" component={Register} />
        <Route path="/emprendedor" component={Emprendedor} />

        <Redirect exact from="/" to="/admin/dashboard" />
        <RouteWithLayout
          component={DashboardView}
          exact
          layout={MainLayout}
          path="/admin/"
        />
        <RouteWithLayout
        component={ReportsView}
        exact
        layout={MainLayout}
        path="/admin/reportes"
      />
        <RouteWithLayout
          component={UserListView}
          exact
          layout={MainLayout}
          path="/admin/users"
        />
        <RouteWithLayout
          component={ProductListView}
          exact
          layout={MainLayout}
          path="/admin/products"
        />
        <RouteWithLayout
          component={TypographyView}
          exact
          layout={MainLayout}
          path="/admin/typography"
        />
        <RouteWithLayout
          component={IconsView}
          exact
          layout={MainLayout}
          path="/admin/icons"
        />
        <RouteWithLayout
          component={AccountView}
          exact
          layout={MainLayout}
          path="/admin/account"
        />
        <RouteWithLayout
          component={SettingsView}
          exact
          layout={MainLayout}
          path="/admin/settings"
        />
        <RouteWithLayout
          component={SignUpView}
          exact
          layout={MinimalLayout}
          path="/admin/sign-up"
        />
        <RouteWithLayout
          component={SignInView}
          exact
          layout={MinimalLayout}
          path="/admin/sign-in"
        />
        <RouteWithLayout
          component={NotFoundView}
          exact
          layout={MinimalLayout}
          path="/admin/not-found"
        />
        <Redirect to="/admin/dashboard" />
      </Switch>
    </Router>
  );
}
