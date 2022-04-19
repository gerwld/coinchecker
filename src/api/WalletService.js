import axios from "axios";

export default class WalletService {
  static async getAllWallets() {
    return axios.get("http://159.223.218.84:8000/api/core/wallets");
  }
  static async createWallet(name) {
    return axios.post("http://159.223.218.84:8000/api/core/wallets", {
        name
    });
  }
  static async buyCoinInWalletId(walletId, buyCoinInputDto) {
    return axios.post(`http://159.223.218.84:8000/api/core/wallets/${walletId}/buy`,buyCoinInputDto);
  }
  static async addCoinInWalletId(walletId, coinId) {
    return axios.post(`http://159.223.218.84:8000/api/core/wallets/${walletId}/buy`, {
      params: {
        id: coinId
      }
    });
  }
  
}