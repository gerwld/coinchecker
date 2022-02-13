import React from 'react'
const SET_LOAD = 'coinchecker/app-reducer/SET_LOAD';
export const setLoading = (isLoad) => ({ type: SET_LOAD, isLoad });


let initialState = {
    isLoading: true,
    headTrends: [
        {
            id: 1,
            logoUrl: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
            name: "Bitcoin",
            price: "42000",
            ticker: "BTC"
        },
        {
            id: 2,
            logoUrl: "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
            name: "Etherium",
            price: "3000",
            ticker: "ETH",
        },
        {
            id: 3,
            logoUrl: "https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707",
            name: "Tether",
            price: "1",
            ticker: "USDT",
        },
        {
            id: 4,
            logoUrl: "https://assets.coingecko.com/coins/images/10365/small/near_icon.png?1601359077",
            name: "Near",
            price: "14",
            ticker: "NEAR",
        }
    ]
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOAD:
            return {
                ...state,
                isLoading: action.isLoad
            }
        default:
            return state;
    }
}


export default appReducer;