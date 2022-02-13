import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/redux-store";
import { privateRoutes, publicRoutes } from "./routes/routes";


function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <div>
      <Routes>
        {isAuth
          ? privateRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element to={route.toUrl ? route.toUrl : ""} />}
              />
            ))
          : publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element to={route.toUrl ? route.toUrl : ""} />}
              />
            ))}
      </Routes>
    </div>
  );
}

const AppContainer = App;

let CryptoChecker = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  );
};

export default CryptoChecker;
