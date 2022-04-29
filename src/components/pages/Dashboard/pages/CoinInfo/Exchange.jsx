import React, {useState} from "react";
import s from "./Coin.module.css";
import {VscArrowSwap} from "react-icons/vsc";

const Exchange = ({price, symbol}) => {
 const [coinInput, setCoin] = useState(1);
 const [usdInput, setUsd] = useState(price);

 const onCoinChange = (e) => {
  setCoin(e.target.value);
  if(e.target.value) {
   setUsd(e.target.value * price);
  } else {
   setUsd("");
  }}

 const onUSDChange = (e) => {
  setUsd(e.target.value);
  if(e.target.value) {
   setCoin(e.target.value / price);
  } else {
   setCoin("");
  }}

  return (
    <div className={s.exchange}>
     <div className={s.input_block_ex}>
      <button type="button">{symbol}</button>
      <input type="number" placeholder="1" value={coinInput} onChange={onCoinChange}/>
     </div>
     <VscArrowSwap />

     <div className={s.input_block_ex}>
      <button type="button">USD</button>
      <input type="number" placeholder="0" value={usdInput} onChange={onUSDChange}/>
     </div>
    </div>
  );
};

export default Exchange;
