import React from 'react';

const TOGGLE_THEME = 'soc-net-pjaw/app-reducer/TOGGLE_THEME';
export const setInitializingSuccess = () => ({type: TOGGLE_THEME});

let initialState = {
    name: 'Test redux'
}

const dashReducer = (state = initialState, action) => {
    switch(action.type) {
            case TOGGLE_THEME:
                return {
                    ...state
                }
        default:
            return state;
    }
}

export default dashReducer;