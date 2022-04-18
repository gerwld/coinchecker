import WalletService from "../../api/WalletService";

const GET_ALL_WALLETS = "coinchecker/wallet-reducer/GET_ALL_WALLETS";
const getAllWalletsAC = (payload) => ({ type: GET_ALL_WALLETS, payload });

const walletsState = {
  isLoaded: false,
  content: null,
};

const walletsReducer = (state = walletsState, action) => {
  switch (action.type) {
    case GET_ALL_WALLETS:
      return {
        ...state,
        isLoaded: true,
        content: action.payload,
      };
    default:
      return state;
  }
};

// ***** Thunk creators ***** //

export const getAllWalletsTC = () => {
  return async (dispatch) => {
    const data = await WalletService.getAllWallets();
    dispatch(getAllWalletsAC(data.data));
    console.log(data);
  };
};

export const buyCoinInWalletIdTC = (id, data) => {
  const buyCoinInputDto = {
    amount: parseInt(data.amount),
    coinId: parseInt(data.coinId),
    comment: data.comment,
    usdAmount: parseInt(data.usdAmount),
  };
  return async (dispatch) => {
    try {
      await WalletService.buyCoinInWalletId(id, buyCoinInputDto);
      dispatch(getAllWalletsTC());
    } catch (error) {
      alert(error);
    }
  };
};

export default walletsReducer;
