//export with Node.js
const redux = require('redux');
const createStore = redux.createStore; //create new Redux store
const initialState = { //often an object
    counter: 0
}

//Reducer
//pass in old state & action
const rootReducer = (state = initialState, action) => { //initalState as default state value when its not defined
    //react to action
    if (action.type === 'INC_COUNTER') {
        return { //create new JS object
            ...state, //pass property of old state
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return { //create new JS object
            ...state, //pass property of old state
            counter: state.counter + action.value
        };
    }
    return state; //return old state
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => { //function to be executed whenever state is updated
    console.log('[Subscription]', store.getState());
});

//Dispatching Action
//increase by 1
store.dispatch({type: 'INC_COUNTER'}); //access store
//add specific number to counter, need to pass value with type
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());