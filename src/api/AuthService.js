import axios from "axios";

const instance = axios.create({
  baseURL: "http://159.223.218.84:8000/api/core/",
});

export default class AuthService {
  static async getAuth(authObject) {
    return instance.post("auth/basic/token", authObject);
  }
  static async getGitToken(code) {
    return instance.get(`auth/oauth/github/token?code=${code}`);
  }
  static async getReg(inputDto) {
    return instance.post("users", inputDto);
  }
  static async getCurrentUser() {
    return axios.get("http://159.223.218.84:8000/api/core/users/current");
  }
}
