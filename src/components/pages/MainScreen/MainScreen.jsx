import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../../../redux/reducers/auth-reducer";
import HeaderMain from "../../UI/Header/Header";
import Features from "./Features/Features";
import HeaderTrends from "./HeaderTrends/HeaderTrends";

const Main = () => {
  const dispatch = useDispatch();
  const { headTrends, isAuth } = useSelector((state) => ({
    headTrends: state.app.headTrends,
    isAuth: state.auth.isAuth,
  }));

  const onLogOut = () => {
    dispatch(userLogOut());
  };
  return (
    <>
      <HeaderMain isAuth={isAuth} logOut={onLogOut} />
      <main className="content-wrapper">
        <HeaderTrends headTrends={headTrends} />
        <Features/>
      </main>
      <footer>
        Footer
      </footer>
    </>
  );
};

export default Main;
