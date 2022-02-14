import React from "react";
import BoardService from "../api/BoardService";

const LOAD_LAST_ITEMS = "coinchecker/dash-reducer/LOAD_LAST_ITEMS";
export const loadItems = (items) => ({ type: LOAD_LAST_ITEMS, items });

let initialState = {
  name: "Test redux",
  last_added: [],
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
    let data = await BoardService.getData().then(r => r.data.content);
    console.log(data[0]);
    dispatch(loadItems(data));
  };
};

export default dashReducer;
