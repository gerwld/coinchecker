import React from "react";
import withClickOutside from "../../../../../hoc/withClickOutside";
import s from "./SwS.module.css";


const init = [
 {symbol: "BTC", name: "Bitcoin"},
 {symbol: "ETH", name: "Ether"},
 {symbol: "LTC", name: "Litecoin"},
 {symbol: "BCH", name: "Bitcoin Cash"},
 {symbol: "BNB", name: "Binance Coin"},
 {symbol: "EOS", name: "EOS"},
 {symbol: "XRP", name: "XRP"},
 {symbol: "XLM", name: "Lumens"},
 {symbol: "LINK", name: "Chainlink"},
 {symbol: "DOT", name: "Polkadot"},
 {symbol: "YFI", name: "Yearn.finance"},
]

const SwapSelect = withClickOutside(({ refE, setShow, isShow, symbol, ignore, onSelect }) => {
  const onSetShow = () => setShow(!isShow);
  const onSelectEvent = (e) => {
   onSelect(e);
   setShow(false);
  }
  return (
    <div>
      <button onClick={onSetShow} ref={ignore} className={isShow ? s.opened : ""} type="button">
        {symbol}
        <span />
      </button>
      {isShow ? (
        <div className={s.select_block} ref={refE}>
          <div className={s.select_type}>
            <input type="text" placeholder="Search..." />
            <div className={s.select_options}>
              <span>Cryptocurrencies</span>

              <div className={s.content}>
               {init.map(e => <SwapElem symbol={e.symbol} name={e.name} onSelect={onSelectEvent}/>)}
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

const SwapElem = ({symbol = "-", name = "-", onSelect}) => {
  const onSelectItem = () => {
   onSelect(symbol);
  }
  return (
    <div className={s.elem} onClick={onSelectItem}>
      <span>{symbol}</span>
      <span>{name}</span>
    </div>
  );
};

export default SwapSelect;
