import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import Root from "./Root";

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

render(
    <Provider store={store}>
        <Root />
    </Provider>,
  document.getElementById('root')
);


