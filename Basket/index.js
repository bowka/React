import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducer/reducer';
import { render } from 'react-dom';


const store = createStore(reducer,window.devToolExtension? window.devToolExtension(): val=>val);

render((<Provider store={store}><App /></Provider>),document.getElementById('root'));
