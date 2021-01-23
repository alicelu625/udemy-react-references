import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//global config
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
//common header
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
//set header for specific types
axios.defaults.headers.post['Content-Type'] = 'application/json';

//access request object and use() registers new interceptor
axios.interceptors.request.use(request => {
    console.log(request);
    //edit request config
    return request; //need to return, otherwise block request
}, error => {
    console.log(error);
    return Promise.reject(error); //so we can still forward to our request
});

//handle responses
axios.interceptors.response.use(response => {
    console.log(response);
    //edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
