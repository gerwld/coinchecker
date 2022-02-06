import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import appReducer from "./app-reducer";
import dashReducer from "./dashboard-reducer";
import { reducer as formReducer } from 'redux-form'
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    dashboard: dashReducer,
    form: formReducer
});

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;