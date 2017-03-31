import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import App from './components/app';

const _store = createStore(allReducers);

ReactDOM.render(
        <Provider store={_store}>
        	<App />
        </Provider>,
    document.getElementById('root')
);
