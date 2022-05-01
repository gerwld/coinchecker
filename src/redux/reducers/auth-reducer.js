import axios from "axios";
import AuthService from "../../api/AuthService";

const SET_USER_TK = "coinchecker/dash-reducer/SET_USER_TK";
const SET_USER_DATA = "coinchecker/dash-reducer/SET_USER_DATA";
const SET_REG_STATUS = "coinchecker/dash-reducer/SET_REG_STATUS";
const REG_ERROR = "coinchecker/dash-reducer/REG_ERROR";
const LOG_ERROR = "coinchecker/dash-reducer/LOG_ERROR";
export const setUserToken = (token, isAuth) => ({ type: SET_USER_TK, token });
export const setUserData = (data, isAuth) => ({ type: SET_USER_DATA, data, isAuth });
export const setRegStatus = (status) => ({ type: SET_REG_STATUS, status });
export const setRegError = (message) => ({ type: REG_ERROR, message });
export const setLogError = (message) => ({ type: LOG_ERROR, message });

let initialState = {
  isAuth: false,
  userToken: null,
  authErr: null,
  authUser: {
    id: null,
    username: null,
    email: null,
  },
  regSuccess: false,
  regErr: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TK:
      return {
        ...state,
        authErr: null,
        userToken: action.token,
      };
    case SET_USER_DATA:
      return {
        ...state,
        authErr: null,
        isAuth: action.isAuth,
        authUser: action.data,
      };
    case SET_REG_STATUS:
      return {
        ...state,
        regSuccess: action.status,
      };
    case REG_ERROR: 
      return {
        ...state,
        regErr: action.message
      }
    case LOG_ERROR: 
      return {
        ...state,
        authErr: action.message
      }
    default:
      return state;
  }
};

//***** Thunk Creators *****//

//User authentication
export const userAuth = (authData) => {
  return async (dispatch) => {
    let authObj = { password: authData.log_password, username: authData.log_login };
    await AuthService.getAuth(authObj)
      .then((authRes) => {
        localStorage.setItem("session", `Bearer ${authRes.data}`);
        dispatch(getUser(`Bearer ${authRes.data}`));
      })
      .catch((err) => {
        if (err.response) {
          dispatch(setLogError(err.response.data.message));
          setTimeout(() => dispatch(setLogError(null)), 30000);
          localStorage.removeItem("session");
        }
      });
  };
};

export const getUser = (token) => {
  return async (dispatch) => {
    try {
      const authUser = await AuthService.getCurrentUser(token);
      dispatch(setUserData(authUser.data, true));

      dispatch(setUserToken(token));
      axios.defaults.headers.post["Authorization"] = token;
      axios.defaults.headers.common["Authorization"] = token;
    } catch (error) {
      axios.defaults.headers.post["Authorization"] = null;
      axios.defaults.headers.common["Authorization"] = null;
      localStorage.removeItem("session");
    }
  };
};

export const userLogOut = () => {
  return (dispatch) => {
    dispatch(setUserData(null, false));
    dispatch(setUserToken(null));
    localStorage.removeItem("session");
    axios.defaults.headers.post["Authorization"] = "";
    axios.defaults.headers.common["Authorization"] = "";
  };
};

export const userRegister = (data) => {
  return (dispatch) => {
    let datainputDto = {
      email: data.email,
      password: data.password,
      username: data.login,
    };
    AuthService.getReg(datainputDto).then((e) => {
      if (e.status === 200) {
        dispatch(setRegStatus(true));
      }
    });
  };
};

export default authReducer;
