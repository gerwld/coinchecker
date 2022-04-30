import BoardService from "../../api/BoardService";
import WalletService from "../../api/WalletService";

const GET_ALL_WALLETS = "coinchecker/wallet-reducer/GET_ALL_WALLETS";
const GET_WALLET = "coinchecker/wallet-reducer/GET_WALLET";
const RES_WALLET = "coinchecker/wallet-reducer/RES_WALLET";
const getAllWalletsAC = (payload) => ({ type: GET_ALL_WALLETS, payload });
const getWallet = (wallet, transactions, coin) => ({type: GET_WALLET, wallet, transactions, coin})
export const resWallet = {type: RES_WALLET};

const walletsState = {
  isLoaded: false,
  content: null,
  addCoinSearchResults: null,

  currentWallet: null,
  currentTransactions: null,
  currentCoin: null,
  isTransCurrLoaded: false
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
        currentWallet: {...action.wallet, ...action.transactions},
        currentCoin: action.coin,
        isTransCurrLoaded: true
      }
    case RES_WALLET:
      return {
        ...state,
        currentWallet: null,
        currentCoin: null,
        isTransCurrLoaded: false
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
    const transactions = await WalletService.getTransactionsById(walletId).then(data => data.data);
    const data = await WalletService.getWalletById(walletId);
    const coin = await BoardService.getCoinById(coinId).then(data => data.data);
    dispatch(getWallet(data.data, transactions, coin));
  };
};

export default walletsReducer;
