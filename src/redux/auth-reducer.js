import axios from "axios";

import AuthService from '../api/AuthService';

const SET_USER_TK = 'coinchecker/dash-reducer/SET_USER_TK';
const SET_USER_DATA = 'coinchecker/dash-reducer/SET_USER_DATA';
const SET_REG_STATUS = 'coinchecker/dash-reducer/SET_REG_STATUS';
export const setUserToken = (token, isAuth) => ({ type: SET_USER_TK, token });
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
    return async (dispatch) => {
        let authObj = { password: authData.log_password, username: authData.log_login };
        let token;
        await AuthService.getAuth(authObj).then(res => {
            if (res.status === 200) {
                token = `Bearer ${res.data}`;
                localStorage.setItem('session', token);
            }
        });

       await dispatch(getUser(token));
    }
}

export const getUser = (token) => {
    return async (dispatch) => {
        dispatch(setUserToken(token));
        axios.defaults.headers.post['Authorization'] = token;
        axios.defaults.headers.common['Authorization'] = token;

        await AuthService.getCurrentUser(token).then(e => {
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
        axios.defaults.headers.post['Authorization'] = '';
        axios.defaults.headers.common['Authorization'] = '';
    }
}

export const sendGitCodeToServ = (data) => {
    return async (dispatch) => {
        AuthService.getGitToken(data.code).then(e => {
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
        AuthService.getReg(datainputDto).then(e => {
            if (e.status === 200) {
                dispatch(setRegStatus(true));
            }
        });
    }
}




export default authReducer;