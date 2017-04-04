/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.html';
import { configureStore } from './store';
import { App } from './containers';

const store = configureStore();

const component = (
   <Provider store={store}>
      <Router>
         <App />
      </Router>
   </Provider>
);

const target = document.getElementById('root');

render(component, target);
