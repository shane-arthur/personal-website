import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { StyleRoot } from 'radium';
import createRoutes from './routes/index';
import { browserHistory } from 'react-router'

let state = {};

if (window.__REDUX_STATE__) {
    try {
        state = JSON.parse(unescape(__REDUX_STATE__));
    }
    catch (e) {
        console.log('error');
    }
}

console.log('fuck');
console.log(state);
const store = configureStore(state);
ReactDOM.render((
    <Provider store ={store} radiumConfig={{userAgent: navigator.userAgent}}>
    <StyleRoot>
        { createRoutes(browserHistory) }
        </StyleRoot>
    </Provider>), document.getElementById('main'));

