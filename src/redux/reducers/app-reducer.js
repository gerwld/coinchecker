const SET_LOAD = 'coinchecker/app-reducer/SET_LOAD';
const SET_PENDING = 'coinchecker/app-reducer/SET_PENDING';

export const setLoading = (isLoad) => ({ type: SET_LOAD, isLoad });
export const setGlobalPending = (payload) => ({ type: SET_PENDING, payload });


let initialState = {
    isLoading: true,
    isGlobalPending: false,
    headTrends: [
        {
            id: 1,
            logoUrl: "/img/main_coins/btc.png",
            name: "Bitcoin",
            price: "42000",
            ticker: "BTC"
        },
        {
            id: 2,
            logoUrl: "/img/main_coins/eth.png",
            name: "Etherium",
            price: "3000",
            ticker: "ETH",
        },
        {
            id: 4,
            logoUrl: "/img/main_coins/bnb.png",
            name: "Tether",
            price: "14",
            ticker: "BNB",
        },
        {
            id: 3,
            logoUrl: "/img/main_coins/usdt.png",
            name: "Tether",
            price: "1",
            ticker: "USDT",
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
        case SET_PENDING:
            return {
                ...state,
                isGlobalPending: action.payload
            }
        default:
            return state;
    }
}


export default appReducer;