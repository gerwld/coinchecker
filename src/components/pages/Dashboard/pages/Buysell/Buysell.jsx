import React from "react";
import s from "./Buysell.module.css";

const Buysell = () => {
  React.useEffect(() => {
    window.scrollTo(0, 1);
  }, [])
  return (
    <div className={s.content_block}>
      <h2 className={s.title}>Buy & Sell</h2>
    </div>
  );
};


export default Buysell;
