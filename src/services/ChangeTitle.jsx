import React from "react";
import { useLocation } from "react-router-dom";
import { getTitleByLocation } from "../routes/routeTitle";
import { changeTitle } from "./title";

//For prevent whole re-render (useLocation causing it)
const ChangeTitle = () => {
  const loc = useLocation().pathname;

  React.useEffect(() => {
    const title = getTitleByLocation(loc);
    if (title) {
      changeTitle(title + " / CoinChecker");
    } else {
      changeTitle("CoinChecker");
    }
  }, [loc]);

  return <></>;
};

export default ChangeTitle;
