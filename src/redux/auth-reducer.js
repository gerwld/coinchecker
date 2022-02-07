import axios from "axios";
import { authAPI } from "../api/api";

const SET_USER_TK = 'coinchecker/dash-reducer/SET_USER_TK';
const SET_USER_DATA = 'coinchecker/dash-reducer/SET_USER_DATA';
const SET_REG_STATUS = 'coinchecker/dash-reducer/SET_REG_STATUS';
export const setUserToken = (token) => ({ type: SET_USER_TK, token });
export const setUserData = (data, isAuth) => ({ type: SET_USER_DATA, data, isAuth });
export const setRegStatus = (status) => ({ type: SET_REG_STATUS, status });

let initialState = {
    isAuth: false,
    userToken: null,
    authUser: {
        id: null,
        username: null,
        email: null
    },
    regSuccess: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_TK:
            return {
                ...state,
                userToken: action.token,
            }
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: action.isAuth,
                authUser: action.data
            }
        case SET_REG_STATUS:
            return {
                ...state,
                regSuccess: action.status
            }
        default:
            return state;
    }
}

//***** Thunk Creators *****//

//User authentication
export const userAuth = (authData) => {
    return async (dispatch, getState) => {
        let authObj = { password: authData.log_password, username: authData.log_login };
        //get auth token
        await authAPI.getAuth(authObj).then(res => {
            if (res.status === 200) {
                //set it to state & add to all new requests
                let token = `Bearer ${res.data}`;
                dispatch(setUserToken(token));
                axios.defaults.headers.post['Authorization'] = token; // for POST requests
                axios.defaults.headers.common['Authorization'] = token; // for all requests
            }
        })
        //get user data
        await authAPI.getCurrentUser(getState().auth.userToken).then(e => {
            if (e.status === 200) {
                dispatch(setUserData(e.data, true));
            }
        })
    }
}

export const userLogOut = () => {
    return (dispatch) => {
        dispatch(setUserData(null, false));
        dispatch(setUserToken(null));
    }
}

export const sendGitCodeToServ = (data) => {
    return async (dispatch) => {
        authAPI.getGitToken(data.code).then(e => {
            console.log(e);
        });
    }
}

export const userRegister = (data) => {
    return (dispatch) => {
        let datainputDto = {
            email: data.email,
            password: data.password,
            username: data.login
        }
        authAPI.getReg(datainputDto).then(e => {
            if (e.status === 200) {
                dispatch(setRegStatus(true));
            }
        });
    }
}




export default authReducer;