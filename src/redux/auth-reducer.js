import { formValueSelector } from "redux-form";
import { authAPI } from "../api/api";

const LOAD_LAST_ITEMS = 'coinchecker/dash-reducer/LOAD_LAST_ITEMS';
export const loadItems = (items) => ({ type: LOAD_LAST_ITEMS, items });

let initialState = {
    isAuth: false,
    userId: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LAST_ITEMS:
            return {
                ...state,
                list: [...state.list, action.commentData]
            }
        default:
            return state;
        }
}

//Thunk Creator
export const userAuth = (authData) => {
    return async (dispatch) => {
        let authObj = {password: authData.log_password, username: authData.log_login}
        authAPI.getAuth(authObj).then(e => {
            //get response and set it to state
        })
    }
}

export default authReducer;