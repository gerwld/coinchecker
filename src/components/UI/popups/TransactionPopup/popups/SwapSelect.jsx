import React from "react";
import withClickOutside from "../../../../../hoc/withClickOutside";
import s from "./SwS.module.css";

const SwapSelect = withClickOutside(({ refE, setShow, isShow, symbol, ignore }) => {
  const onSetShow = () => setShow(!isShow);
  return (
    <div>
      <button onClick={onSetShow} ref={ignore} className={isShow ? s.opened : ''} type="button">
        {symbol}
        <span />
      </button>
      {isShow 
      ? <div className={s.select_block} ref={refE}>
          <div className={s.select_type}>
           <input type="text" placeholder="Search..." />
           я родился</div>
        </div> : ''}
    </div>
  );
});

export default SwapSelect;
