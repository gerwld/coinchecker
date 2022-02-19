import React from "react";
import BoardService from "../api/BoardService";

const LOAD_LAST_ITEMS = "coinchecker/dash-reducer/LOAD_LAST_ITEMS";
const GET_FAV_COINS = "coinchecker/dash-reducer/GET_FAV_COINS";
export const loadItems = (items) => ({ type: LOAD_LAST_ITEMS, items });
export const getFavCoinsAC = (items, count) => ({ type: GET_FAV_COINS, items, count });

let initialState = {
  last_added: null,
  favCoins: {
    items: null,
    totalCount: null
  }
};

const dashReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LAST_ITEMS:
      return {
        ...state,
        last_added: [...action.items],
      };
    case GET_FAV_COINS:
      return {
        ...state,
        favCoins: {
          items: action.items,
          totalCount: action.count
        }
      };
    default:
      return state;
  }
};


export const getCoinOutput = () => {
  return async (dispatch) => {
    let data = await BoardService.getData().then(r => r.data.content);
    dispatch(loadItems(data));
  };
};

export const getFavCoins = () => {
  return async (dispatch) => {
    let data = await BoardService.getFavCoins();
    dispatch(getFavCoinsAC(data.content, data.totalElements));
    console.log(data);
  }
}

export default dashReducer;
