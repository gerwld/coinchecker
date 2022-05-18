import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGlobalPending } from "../../../redux/reducers/app-reducer";


export const LinkWithPending = ({ children, link }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const onGetStartedClick = () => {
    dispatch(setGlobalPending(true));
    setTimeout(() => {
      dispatch(setGlobalPending(false));
      nav(link);
    }, 450);
  };
  return <div onClick={onGetStartedClick}>{children}</div>;
};
