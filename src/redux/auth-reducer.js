import { authAPI } from "../api/api";

const SET_USER = 'coinchecker/dash-reducer/SET_USER';
export const setUser = (id) => ({ type: SET_USER, id });

let initialState = {
    isAuth: false,
    userId: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isAuth: true,
                userId: action.id
            }
        default:
            return state;
    }
}

//***** Thunk Creators *****//
export const userAuth = (authData) => {
    return async (dispatch) => {
        let authObj = { password: authData.log_password, username: authData.log_login }
        authAPI.getAuth(authObj).then(e => {
            //get response and set it to state
            // dispatch(setUser(e.data.id));
        })
    }
}

export const authWithServer = (data) => {
    return async (dispatch) => {
        authAPI.getToken(data.code).then(e => {
            console.log(e);
            debugger;
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
        console.log(e);
        debugger;
      });
    }
}




export default authReducer;