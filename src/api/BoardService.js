import axios from "axios";

const instance = axios.create({
  baseURL: "https://164.90.236.61:8000/api/core/",
});

export default class BoardService {
  static async getData() {
    return axios.get("https://164.90.236.61:8000/api/core/coins");
  }
}
