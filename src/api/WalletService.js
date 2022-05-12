import axios from "axios";

export default class WalletService {
  static async getAllWallets() {
    return axios.get("/api/core/wallets");
  }
  static async getWalletById(walletId) {
    return axios.get("/api/core/wallets/" + walletId);
  }
  static async getTransactionsById(walletId) {
    return axios.get(`/api/core/wallets/${walletId}/transactions`);
  }
  static async createWallet(name) {
    return axios.post("/api/core/wallets", {
      name,
    });
  }

  static async getMarketChart(chartId, timeFilter) {
    return axios.get(`http://api.coingecko.com/api/v3/coins/${chartId}/market_chart?vs_currency=usd&days=${timeFilter}`);
  }


  static async buyCoinInWalletId(walletId, buyCoinInputDto) {
    return axios.post(`/api/core/wallets/${walletId}/buy`, buyCoinInputDto);
  }
  static async withdrawCoinsWalletId(walletId, coinInputDto) {
    return axios.post(`/api/core/wallets/${walletId}/withdraw`, coinInputDto);
  }
  static async swapCoinsWalletId(walletId, coinInputDto) {
    return axios.post(`/api/core/wallets/${walletId}/swap`, coinInputDto);
  }
}
