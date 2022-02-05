import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import appReducer from "./app-reducer";
import dashReducer from "./dashboard-reducer";

let reducers = combineReducers({
    app: appReducer,
    dashboard: dashReducer
});

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;