import axios from "axios";

const instance = axios.create({
  baseURL: "/api/core/",
});

export default class AuthService {
  static async getAuth(authObj) {
    return instance.post("auth/basic/token", authObj);
  }
  static async getGitToken(code) {
    return instance.get(`auth/oauth/github/token?code=${code}`);
  }
  static async getReg(inputDto) {
    return instance.post("users", inputDto);
  }
  static async getCurrentUser(payload) {
    return axios.get("/api/core/users/current", {
      headers: {
      "Authorization": payload
      }
    });
  }
}
