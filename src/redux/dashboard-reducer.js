import React from 'react';

const LOAD_LAST_ITEMS = 'coinchecker/dash-reducer/LOAD_LAST_ITEMS';
export const loadItems = (items) => ({type: LOAD_LAST_ITEMS, items});

let initialState = {
    name: 'Test redux'
}

const dashReducer = (state = initialState, action) => {
    switch(action.type) {
            case LOAD_LAST_ITEMS:
                return {
                    ...state,
                    aboba: action.items
                }
        default:
            return state;
    }
}

//Thunk Creator
export const getUserInfo = () => {
    debugger;
    return (dispatch) => {
        alert('get into thunk!');
       dispatch(loadItems('aboba1'));
    }
}

export default dashReducer;