import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import dashReducer from "./dashboard-reducer";

let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    dashboard: dashReducer,
    form: formReducer
});

const store = createStore(reducers, 
    applyMiddleware(thunk)
);

export default store;