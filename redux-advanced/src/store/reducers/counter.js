import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            //copy old state - method 1: using Object.assign()
            const newState = Object.assign({}, state); //pass in empty JS object & old JS object
            newState.counter = state.counter + 1;
            return newState; //return new JS object

        case actionTypes.DECREMENT:
            //copy old state - method 2: using spread operator
            return {
                ...state, //distribute properties with values from old state to new state
                counter: state.counter - 1 //additional property to be added to object (or overwrite if already present)
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            //use utility function to update object
            //return updateObject(state, {counter: state.counter - action.value});
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state;
};

export default reducer;