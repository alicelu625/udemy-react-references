import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers ,applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

//combine reducers into 1 state & reducer
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

//middleware for logging each action issued
const logger = store => {
    return next => { //function to let action continue on its journey into reducer
        return action => { //execute code to run between action & reducer
            console.log('[Middleware] Dispatching', action);
            const result = next(action); //execute next - let action continue to reducer
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};

//enhancer for Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
