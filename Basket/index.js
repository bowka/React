import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './container/container';
import reducer from './reducer/reducer';
import { render } from 'react-dom';


const store = createStore(reducer,window.devToolsExtension? window.devToolsExtension(): val=>val);

render((<Provider store={store}><App /></Provider>),document.getElementById('root'));
