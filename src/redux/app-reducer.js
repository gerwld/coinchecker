import React from 'react'
const SET_INITIALIZING = 'coinchecker/app-reducer/SET_INITIALIZING';
export const setInitializingSuccess = () => ({ type: SET_INITIALIZING });


let initialState = {
    initialized: true
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZING:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializeApp = () => {

}

export default appReducer;