import React from "react";
import Breadcrumbs from "../../../../UI/Breadcrumbs/Breadcrumbs";
import Cointitle from "../../../../UI/CoinTitle/Cointitle";
import s from "./TransactionsWallet.module.css";

const TransactionsWallet = () => {
  return (
    <div className={s.trans_content}>
      <Breadcrumbs
        current_ctg={"Coin: обзор транзакций"}
        links={[
          { to: "/dashboard", name: "Coins" },
          { to: "/dashboard/wallet", name: "WalletName" },
        ]}
      />
     <Cointitle/>
      Transactions title + add transaction
      <br />
      <br />
      transactions info
      <br />
      pagination
      <br />
    </div>
  );
};

export default TransactionsWallet;
