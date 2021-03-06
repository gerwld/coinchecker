import axios from "axios";

const instance = axios.create({
  baseURL: "/api/core/",
});

export default class BoardService {
  static async getData(showLast = 15, page = 0) {
    return axios.get("/api/core/coins", {
      params: {
        size: showLast,
        page
      }
    });
  }

  static async searchCoin(name) {
    return axios.get("/api/core/coins", {
      params: {
        name,
        size: 10
      }
    })
  }

  static async getFavCoins(size = 10, page = 0) {
    return axios.get("/api/core/coins/favorites", {
      params: {
        page,
        size,
      }}).then(r => r.data)
  }
  static async setFavCoin(coinId) {
    return axios.put(`/api/core/coins/${coinId}/add-to-favorites`);
  }
  static async delFavCoin(coinId) {
    return axios.delete(`/api/core/coins/${coinId}/delete-from-favorites`);
  }
  static async getCoinById(coinId) {
    return axios.get(`/api/core/coins/${coinId}`);
  }
}

export const fetchFavCoin = (coinId, isFav) => {
  if(isFav) {
    BoardService.delFavCoin(coinId);
  } else {
    BoardService.setFavCoin(coinId);
  }
}
