import React from "react";

import BoardService from "../api/BoardService";

const LOAD_LAST_ITEMS = "coinchecker/dash-reducer/LOAD_LAST_ITEMS";
export const loadItems = (items) => ({ type: LOAD_LAST_ITEMS, items });

let initialState = {
  name: "Test redux",
  last_added: [
    {
      id: "plc_1!",
      name: "BTC",
      price: 40000,
      source: "Google. inc",
      daychange: { diff: "2.23", isUp: true },
      holdings: 100,
    },
    {
      id: "plc_2!",
      name: "ETH",
      price: 2000,
      source: "Google. inc",
      daychange: { diff: "1.1", isUp: false },
      holdings: 300,
    },
  ],
};

const dashReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LAST_ITEMS:
      return {
        ...state,
        last_added: [...action.items],
      };
    default:
      return state;
  }
};

//Thunk Creator
export const getCoinOutput = () => {
  return async (dispatch) => {
    let data = await BoardService.getData().then((r) => {
      return r.data.map((r) => ({
        id: r.id,
        name: r.ticker,
        price: r.price,
        logoUrl: r.logoUrl,
        holdings: 600,
        daychange: { diff: "1.1", isUp: false },
      }));
    });
    dispatch(loadItems(data));
  };
};

export default dashReducer;
