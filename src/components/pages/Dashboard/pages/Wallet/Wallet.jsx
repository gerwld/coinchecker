import { connect } from "react-redux";
import React from "react";
import s from "./Wallet.module.css";

const Wallet = () => {
  return (
    <div className={s.content_block}>
      <h2 className={s.title}>Wallet</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favCoins: state.dashboard.favCoins.items,
  };
};

export default connect(mapStateToProps, {})(Wallet);
