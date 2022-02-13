import React from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/UI/Loader/Loader";
import useSession from "./hooks/useSession";
import { setLoading } from "./redux/app-reducer";
import { getUser } from "./redux/auth-reducer";
import store from "./redux/redux-store";
import { globalRoutes, privateRoutes, publicRoutes } from "./routes/routes";


function App({ isAuth, getUser, setLoading, isLoading }) {
  useSession(getUser, setLoading);

  if (isLoading) return <Loader />
  return (
    <div>
      <Routes>
        {globalRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.element to={route.toPath ? route.toPath : ""} />} />
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

// Get state params to app container
const AppContainer = ({ isAuth, getUser, isLoading, setLoading }) => {
  return (
    <App isAuth={isAuth} getUser={getUser} isLoading={isLoading} setLoading={setLoading} />
  )
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isLoading: state.app.isLoading
  }
}

const AppContainerConnect = connect(mapStateToProps, { getUser, setLoading })(AppContainer);

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