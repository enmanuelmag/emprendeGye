import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeRoutes from './app/routes/home';
//import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import storeFn from './redux/store';
const store = storeFn();

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider>
      <HomeRoutes />,
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
