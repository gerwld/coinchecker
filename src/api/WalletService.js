export default class WalletService {
  static async getWallet() {
    return axios.get("http://159.223.218.84:8000/api/core/wallets");
  }
  static async addWalletCoin(name) {
    return axios.post("http://159.223.218.84:8000/api/core/wallets", {
      params: {
        name
      }
    });
  }
  static async getWalletCoin(id) {
    return axios.get("http://159.223.218.84:8000/api/core/wallets/" + id);
  }
  static async buyWalletCoin(id) {
    return axios.post("http://159.223.218.84:8000/api/core/wallets/" + id);
  }
  static async getWalletState(id) {
    return axios.post("http://159.223.218.84:8000/api/core/wallets/" + id);
  }
  
}