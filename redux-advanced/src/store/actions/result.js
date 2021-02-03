import * as actionTypes from './actionTypes';

//asynchronous action creators - dispatch actions created by synchronous ones
export const saveResult = (res) => {
    //can have data transforming logic here such as
    //const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

//dispatch action asynchronously - used in between dispatcher & reducer
export const storeResult = (res) => {
    //get dispatch using thunk - can dispath action whenever it wants (can wait)
    return dispatch => {
    //return (dispatch, getState) => { - getState gets the current state
        //simulate taking 2sec to reach out to server to store
        //usually an HTTP request to the server to get data
        setTimeout(() => {
            //get old counter
            //const oldCount = getState().ctr.counter;
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};