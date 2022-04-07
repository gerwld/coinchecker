import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { appReducer, dashReducer, authReducer } from "./reducers";

let reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  dashboard: dashReducer,
  form: formReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
