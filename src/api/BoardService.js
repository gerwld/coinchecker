import axios from "axios";

const instance = axios.create({
  baseURL: "http://159.223.218.84:8000/api/core/",
});

export default class BoardService {
  static async getData(showLast = 15, page = 0) {
    return axios.get("http://159.223.218.84:8000/api/core/coins", {
      params: {
        size: showLast,
        page
      }
    });
  }

  static async searchCoin(name) {
    return axios.get("http://159.223.218.84:8000/api/core/coins", {
      params: {
        name
      }
    })
  }

  static async getFavCoins(size = 10, page = 0) {
    return axios.get("http://159.223.218.84:8000/api/core/coins/favorites", {
      params: {
        page,
        size,
      }}).then(r => r.data)
  }
  static async setFavCoin(coinId) {
    return axios.put(`http://159.223.218.84:8000/api/core/coins/${coinId}/add-to-favorites`);
  }
  static async delFavCoin(coinId) {
    return axios.delete(`http://159.223.218.84:8000/api/core/coins/${coinId}/delete-from-favorites`);
  }
}

export const fetchFavCoin = (coinId, isFav) => {
  if(isFav) {
    BoardService.delFavCoin(coinId);
  } else {
    BoardService.setFavCoin(coinId);
  }
}
