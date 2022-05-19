import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGlobalPending } from "../../../redux/reducers/app-reducer";
import s from "./Ld.module.css";

export const LinkWithPending = ({ children, link, pending = 450 }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  React.useEffect(() => {
    document.getElementById("loader_pending").style.transition = `opacity ${pending}ms ease`;
  });

  const onGetStartedClick = () => {
    dispatch(setGlobalPending(true));
    setTimeout(() => {
      dispatch(setGlobalPending(false));
      nav(link);
    }, pending);
  };
  return (
    <span onClick={onGetStartedClick} className={s.withpending_block}>
      {children}
    </span>
  );
};
