import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import store from '../redux/store';

const appDiv = document.createElement('div');
document.body.appendChild(appDiv);

ReactDOM.render((
  <Provider store={store}>
    <Main />
  </Provider>

), appDiv);
