import BoardService from "../../api/BoardService";

const LOAD_LAST_ITEMS = "coinchecker/dash-reducer/LOAD_LAST_ITEMS";
const GET_FAV_COINS = "coinchecker/dash-reducer/GET_FAV_COINS";
const RES_FAV_COINS = "coinchecker/dash-reducer/RES_FAV_COINS";
const SELECT_SHOW_COUNT = "coinchecker/dash-reducer/SELECT_SHOW_COUNT";
const SET_SEARCH = "coinchecker/dash-reducer/SET_SEARCH";
const SET_SEARCH_RESULT = "coinchecker/dash-reducer/SET_SEARCH_RESULT";
const EARSE_SEARCH_RESULT = "coinchecker/dash-reducer/EARSE_SEARCH_RESULT";
const ON_TRANSACTION = "coinchecker/dash-reducer/ON_TRANSACTION";
const CLOSE_TRANS_POPUP = "coinchecker/dash-reducer/CLOSE_TRANS_POPUP";
const GET_PAGE_COIN = "coinchecker/dash-reducer/GET_PAGE_COIN";
const RES_PAGE_COIN = "coinchecker/dash-reducer/RES_PAGE_COIN";
const GET_PAGE_COIN_ERR = "coinchecker/dash-reducer/GET_PAGE_COIN_ERR";


export const loadItems = (items, total) => ({ type: LOAD_LAST_ITEMS, items, total });
export const getFavCoinsAC = (items, count) => ({ type: GET_FAV_COINS, items, count });
export const selectShowCount = (payload) => ({ type: SELECT_SHOW_COUNT, payload });
export const onTypeSearch = (payload) => ({ type: SET_SEARCH, payload });
export const setSearchResp = (payload) => ({ type: SET_SEARCH_RESULT, payload });
export const earseSearch = { type: EARSE_SEARCH_RESULT };
export const getTransactionData = (coin, walletId, amount) => ({ type: ON_TRANSACTION, coin, walletId, amount });
export const closeTransPopup = { type: CLOSE_TRANS_POPUP };
export const resFavCoins = { type: RES_FAV_COINS };

export const getPageCoin = (payload) => ({ type: GET_PAGE_COIN, payload });
export const getPageCoinErr = (err) => ({ type: GET_PAGE_COIN_ERR, err });
export const resPageCoin = { type: RES_PAGE_COIN };


let initialState = {
  last_coins: null,
  totalLastCount: null,
  curr_pagination: 15,
  favCoins: {
    isLoaded: false,
    items: null,
    totalCount: null
  },
  searchQuery: "",
  searchResult: null,
  isSearchInit: false,

  transCoin: null,
  isTransPopup: false,
  walletId: null,

  pageCoinData: null,
  pageCoinErr: null
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
          totalCount: action.count,
          isLoaded: true
        }
      };
    case RES_FAV_COINS:
      return {
        ...state,
        favCoins: {
          isLoaded: false,
          items: null,
          totalCount: null
        },
      }
    case SELECT_SHOW_COUNT:
      return {
        ...state,
        curr_pagination: parseInt(action.payload)
      }
    case SET_SEARCH:
      return {
        ...state,
        searchQuery: action.payload,
        isSearchInit: true
      }
    case SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload
      }
    case EARSE_SEARCH_RESULT:
      return {
        ...state,
        searchQuery: "",
        searchResult: null,
        isSearchInit: false
      }
    case ON_TRANSACTION: 
      return {
        ...state,
        transCoin: {...action.coin, amount: action.amount ? action.amount : null},
        walletId: action.walletId,
        isTransPopup: true,
      }
    case CLOSE_TRANS_POPUP:
      return {
        ...state,
        isTransPopup: false,
        transCoin: null,
        walletId: null
      }
    case GET_PAGE_COIN:
      return {
        ...state,
        pageCoinData: action.payload
      }
    case RES_PAGE_COIN:
      return {
        ...state,
        pageCoinData: null
      }
    case GET_PAGE_COIN_ERR:
      return {
        ...state,
        pageCoinData: null,
        pageCoinErr: action.err
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
    dispatch(resFavCoins);
    let data = await BoardService.getFavCoins(showLast, page);
    dispatch(getFavCoinsAC(data.content, data.totalElements));
  }
}

export const onTypeSearchTC = (query) => {
  return async (dispatch) => {
    dispatch(onTypeSearch(query));
    const data = await BoardService.searchCoin(query);
    dispatch(setSearchResp(data.data.content));
  }
}

export const getPageCoinTC = (id) => {
  return async (dispatch) => {
    try {
      const data = await BoardService.getCoinById(id);
      dispatch(getPageCoin(data.data));
    } catch (error) {
      dispatch(getPageCoinErr(error.message));
    }
  
  }
}

export default dashReducer;
