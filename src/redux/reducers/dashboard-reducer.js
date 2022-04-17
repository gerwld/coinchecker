import React from "react";
import BoardService from "../../api/BoardService";

const LOAD_LAST_ITEMS = "coinchecker/dash-reducer/LOAD_LAST_ITEMS";
const GET_FAV_COINS = "coinchecker/dash-reducer/GET_FAV_COINS";
const SELECT_SHOW_COUNT = "coinchecker/dash-reducer/SELECT_SHOW_COUNT";
export const loadItems = (items, total) => ({ type: LOAD_LAST_ITEMS, items, total });
export const getFavCoinsAC = (items, count) => ({ type: GET_FAV_COINS, items, count });
export const selectShowCount = (payload) => ({ type: SELECT_SHOW_COUNT, payload });

let initialState = {
  last_coins: null,
  totalLastCount: null,
  curr_pagination: 15,
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
        last_coins: [...action.items],
        totalLastCount: action.total
      };
    case GET_FAV_COINS:
      return {
        ...state,
        favCoins: {
          items: action.items,
          totalCount: action.count
        }
      };
    case SELECT_SHOW_COUNT:
      return {
        ...state,
        curr_pagination: parseInt(action.payload)
      }
    default:
      return state;
  }
};


export const getCoinOutput = (showLast, page) => {
  return async (dispatch) => {
    dispatch(loadItems([]));
    let data = await BoardService.getData(showLast, page).then(r => r.data);
    dispatch(loadItems(data.content, data.totalElements));
  };
};

export const getFavCoins = (showLast, page) => {
  return async (dispatch) => {
    let data = await BoardService.getFavCoins(showLast, page);
    dispatch(getFavCoinsAC(data.content, data.totalElements));
  }
}

export default dashReducer;
