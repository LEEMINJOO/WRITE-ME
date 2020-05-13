import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'

import { store } from './helpers';
import App  from './App.js';
import './reset.css';

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

render((
    <BrowserRouter>
        <Provider store={store}>
            <Route path="/" component={App}/>
        </Provider>
    </BrowserRouter>
    ),
    document.getElementById('root')
);


