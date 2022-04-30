import React from "react";
import s from "./Ct.module.css";
import { MdArrowDropDown } from "react-icons/md";

const Cointitle = ({ icon, name, symbol, price, percent }) => {
  return (
    <div>
      <div className={s.title_block}>
        <div className={s.icon}>
          <img src={icon} alt={symbol} />
        </div>
        <span className={s.name}>
          {name}
          <span> ({symbol})</span>
        </span>
      </div>
      <div className={s.price_block}>
        <span className={s.price}>${price}</span>
        <span className={`${s.price_dash} ${percent >= 0 && s.priceup}`}>
          <MdArrowDropDown />
          {percent.toFixed(1)}%
        </span>
      </div>
    </div>
  );
};

Cointitle.defaultProps = {
 icon: null,
 name: "--",
 symbol: "--",
 price: "--",
 percent: 0
}


export default Cointitle;
