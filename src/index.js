/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.html';
import { configureStore } from './store';
import App from './containers/App';

const store = configureStore();

const component = (
   <Provider store={store}>
      <App />
   </Provider>
);

const target = document.getElementById('root');

render(component, target);
