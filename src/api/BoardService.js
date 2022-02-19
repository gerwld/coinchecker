import axios from "axios";

const instance = axios.create({
  baseURL: "http://164.90.236.61:8000/api/core/",
});

export default class BoardService {
  static async getData() {
    return axios.get("http://164.90.236.61:8000/api/core/coins");
  }

  static async getFavCoins(page = 1, size = 10, sort = '') {
    return axios.get("http://164.90.236.61:8000/api/core/coins/favorites", {
      params: {
        page,
        size,
        sort
      }}).then(r => r.data)
  }
  static async setFavCoin(coinId) {
    return axios.put(`http://164.90.236.61:8000/api/core/coins/${coinId}/add-to-favorites`);
  }
  static async delFavCoin(coinId) {
    return axios.delete(`http://164.90.236.61:8000/api/core/coins/${coinId}/delete-from-favorites`);
  }
}

export const fetchFavCoin = (coinId, isFav) => {
  if(isFav) {
    BoardService.setFavCoin(coinId);
  } else {
    BoardService.delFavCoin(coinId);
  }
}
