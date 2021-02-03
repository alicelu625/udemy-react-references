import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

//pass prop appTitle to App.js
ReactDOM.render(<App appTitle="Person Manager"/>, document.getElementById('root'));
registerServiceWorker();
