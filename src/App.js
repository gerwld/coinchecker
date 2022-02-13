import React, { useState } from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/redux-store";
import { globalRoutes, privateRoutes, publicRoutes } from "./routes/routes";


function App({isAuth}) {
  return (
    <div>
      <Routes>
      {globalRoutes.map(route => 
          <Route
          key={route.path}
          path={route.path}
          element={<route.element to={route.toPath ? route.toPath : ""} />}/>
        )}
        {isAuth
          ? privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element to={route.toPath ? route.toPath : ""} />}
            />
          ))
          : publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element to={route.toPath ? route.toPath : ""} />}
            />
          ))}
      </Routes>
    </div>
  );
}

const AppContainer = (props) => {
  return (
    <App isAuth={props.isAuth}/>
  )
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const AppContainerConnect = connect(mapStateToProps, {})(AppContainer);

let CryptoChecker = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainerConnect />
      </BrowserRouter>
    </Provider>
  );
};

export default CryptoChecker;
