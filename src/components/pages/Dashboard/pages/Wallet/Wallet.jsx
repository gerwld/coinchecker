import React from "react";
import ShowCoinsBlock from "../../blocks/ShowCoinsBlock/ShowCoinsBlock";
import s from "./Wallet.module.css";

const Wallet = () => {
  return (
    <div className={s.content_block}>
      <h2 className={s.title}>Wallet</h2>
    <div className={s.head_block}>
      <div className={s.current_wallet}>
        <div className={s.wallet_select}>My Portfolio(select)</div>
        <div className={s.current_block}>
          <span>$0.140000</span>
          <span>Total Balance</span>
        </div>
        <div className={s.current_block}>
          <span>$0.00</span>
          <span>24h Portfolio Change (+0%)</span>
        </div>
        <div className={s.current_block}>
          <span>$0.00</span>
          <span>Total Profit / Loss (-)</span>
        </div>
      </div>
      <div className={s.wallet_controls}>
        <button>visib</button>
        <button>3 dots menu</button>
        <button>Add New Coin</button>
      </div>
    </div>
    <ShowCoinsBlock isWallet/>
    </div>
  );
};

export default Wallet;
