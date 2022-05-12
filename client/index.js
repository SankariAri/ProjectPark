import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './assets/stylesheets/main.scss';
import { store } from './features/store.ts';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);