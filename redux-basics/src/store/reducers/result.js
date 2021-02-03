import * as actionTypes from '../action';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result}) //returns new array + concat value
            }
        case actionTypes.DELETE_RESULT:
            /*method 1:
            const id = 2
            const newArray = [...state.results]; //create copy of array by using spread operator to distribute all elements of old array into new one
            newArray.splice(id, 1) //remove element from array
            */
           //method 2:
           //filter() takes function as an input - executes on every element in array, determines if element fulfils a condition
           //return true for every element that is not the index of result (id) selected
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default reducer;