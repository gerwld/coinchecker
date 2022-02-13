import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getUserDataAndAddHeader } from "./redux/auth-reducer";
import store from "./redux/redux-store";
import { globalRoutes, privateRoutes, publicRoutes } from "./routes/routes";


function App({isAuth, getUser}) {

  useEffect(() => {
    const session = localStorage.getItem('session');
    if(session) {
      getUser(session);
    }
  },[])

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

const AppContainer = ({isAuth, getUserDataAndAddHeader}) => {
  return (
    <App isAuth={isAuth} getUser={getUserDataAndAddHeader}/>
  )
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const AppContainerConnect = connect(mapStateToProps, {getUserDataAndAddHeader})(AppContainer);

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