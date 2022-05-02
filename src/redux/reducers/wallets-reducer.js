import BoardService from "../../api/BoardService";
import WalletService from "../../api/WalletService";

const GET_ALL_WALLETS = "coinchecker/wallet-reducer/GET_ALL_WALLETS";
const GET_WALLET = "coinchecker/wallet-reducer/GET_WALLET";
const RES_WALLET = "coinchecker/wallet-reducer/RES_WALLET";
const ERROR_WALLET = "coinchecker/wallet-reducer/ERROR_WALLET";
const getAllWalletsAC = (payload) => ({ type: GET_ALL_WALLETS, payload });
const getWallet = (wallet, transactions, coin) => ({type: GET_WALLET, wallet, transactions, coin})
export const resWallet = {type: RES_WALLET};
const setWalletErr = (payload) => ({ type: ERROR_WALLET, payload });

const walletsState = {
  isLoaded: false,
  content: null,
  addCoinSearchResults: null,

  currentWallet: null,
  currentTransactions: null,
  currentCoin: null,
  isTransCurrLoaded: false,
  error: ''
};

const walletsReducer = (state = walletsState, action) => {
  switch (action.type) {
    case GET_ALL_WALLETS:
      return {
        ...state,
        isLoaded: true,
        content: action.payload
      };
    case GET_WALLET:
      return {
        ...state,
        currentWallet: action.wallet,
        currentTransactions: action.transactions.reverse(),
        currentCoin: action.coin,
        isTransCurrLoaded: true,
        error: ''
      }
    case RES_WALLET:
      return {
        ...state,
        currentWallet: null,
        currentCoin: null,
        currentTransactions: null,
        isTransCurrLoaded: false,
        error: ''
      }
    case ERROR_WALLET:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};

// ***** Thunk creators ***** //

export const getAllWalletsTC = () => {
  return async (dispatch) => {
    const data = await WalletService.getAllWallets();
    dispatch(getAllWalletsAC(data.data));
  };
};

export const getWalletTC = (walletId, coinId) => {
  return async (dispatch) => {
    try {
    const data = await WalletService.getWalletById(walletId);
    const coin = await BoardService.getCoinById(coinId).then(data => data.data);
    const transactions = await WalletService.getTransactionsById(walletId).then(data => data.data);
    const currTransactions = transactions.filter(c=> c.to?.id === parseInt(coinId) || c.from?.id === parseInt(coinId));
    dispatch(getWallet(data.data, currTransactions, coin));
    } catch (error) {
      dispatch(setWalletErr(error.message));
    }
  };
};

export default walletsReducer;
