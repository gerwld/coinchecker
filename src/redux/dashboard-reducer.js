import React from 'react';

const LOAD_LAST_ITEMS = 'coinchecker/dash-reducer/LOAD_LAST_ITEMS';
export const loadItems = (items) => ({ type: LOAD_LAST_ITEMS, items });

let initialState = {
    name: 'Test redux',
    last_added: [
        {
            name: "BTC",
            price: 40000,
            source: 'Google. inc',
            daychange: { diff: '2.23', isUp: true },
            holdings: 100
        },
        {
            name: "ETH",
            price: 2000,
            source: 'Google. inc',
            daychange: { diff: '1.1', isUp: false },
            holdings: 300
        }
    ]
}

const dashReducer = (state = initialState, action) => {
    switch (action.type) {
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
    // debugger;
    return (dispatch) => {
        // alert('get into thunk!');
        dispatch(loadItems('aboba1'));
    }
}

export default dashReducer;