import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import './assets/stylesheets/index.scss';
import rootReducer from './store/rootReducer';

// react-md utilizes Google's material icons
import WebFont from 'webfontloader';
WebFont.load({ google: { families: ['Material Icons', 'Open Sans'] } });

const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}> 
    <App />
</Provider>
, document.getElementById('root'));
