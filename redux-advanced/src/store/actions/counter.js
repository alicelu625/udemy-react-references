import * as actionTypes from './actionTypes';

//synchronous action creator
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        value: value
    };
};

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        value: value
    };
};