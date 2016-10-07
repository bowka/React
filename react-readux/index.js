import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import * as ActionTypes from './constants/actionTypes';
import reducer from './reducers/TimeReducer';
import App from './containers/container';

// co znamena to val=> val ?
const store = createStore(reducer,window.devToolExtension? window.devToolExtension(): val=>val);
setInterval(() => store.dispatch({ type: ActionTypes.TIC }),1000);
render((<Provider store={store}><App /></Provider>),document.getElementById('root'));
