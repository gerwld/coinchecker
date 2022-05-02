import React from "react";
import withClickOutside from "../../../../../hoc/withClickOutside";
import { swapInit } from "../init";
import s from "./SwS.module.css";


const SwapSelect = withClickOutside(({ refE, setShow, isShow, item, ignore, onSelect }) => {
  const onSetShow = () => setShow(!isShow);
  const onSelectEvent = (e) => {
   onSelect(e);
   setShow(false);
  }
  return (
    <div>
      <button onClick={onSetShow} ref={ignore} className={isShow ? s.opened : ""} type="button">
        {item.symbol}
        <span />
      </button>
      {isShow ? (
        <div className={s.select_block} ref={refE}>
          <div className={s.select_type}>
            <input type="text" placeholder="Search..." />
            <div className={s.select_options}>
              <span>Cryptocurrencies</span>

              <div className={s.content}>
               {swapInit.map(e => <SwapElem key={e.symbol + "_swap"} symbol={e.symbol} name={e.name} id={e.id} onSelect={onSelectEvent}/>)}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
});

const SwapElem = ({symbol = "-", name = "-", id, onSelect}) => {
  const onSelectItem = () => {
   onSelect({id: id, symbol: symbol});
  }
  return (
    <div className={s.elem} onClick={onSelectItem}>
      <span>{symbol}</span>
      <span>{name}</span>
    </div>
  );
};

export default SwapSelect;
