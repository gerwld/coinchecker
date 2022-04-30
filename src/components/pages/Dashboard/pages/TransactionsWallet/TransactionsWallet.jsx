import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWalletTC, resWallet } from "../../../../../redux/reducers/wallets-reducer";
import Breadcrumbs from "../../../../UI/Breadcrumbs/Breadcrumbs";
import Cointitle from "../../../../UI/CoinTitle/Cointitle";
import EmbeddedLoader from "../../../../UI/EmbeddedLoader/EmbeddedLoader";
import s from "./TransactionsWallet.module.css";

const TransactionsWallet = () => {
  const dispatch = useDispatch();
  const { walletId, coinId } = useParams();
  const {wallet, coin} = useSelector(({wallets}) => ({
    wallet: wallets.currentWallet,
    coin: wallets.currentCoin

  }))

  useEffect(() => {
    dispatch(resWallet);
  }, []);

  useEffect(() => {
    
    if(!isNaN(walletId)) {
      dispatch(getWalletTC(walletId, coinId));
    }
  },[walletId]);

  const onlyNumAfterDot = (n, toFixed) => {
    if (Number.isInteger(n)) {
      return n;
    } else {
      return n.toFixed(toFixed);
    }
  };
  if(wallet) return (
    <div className={s.trans_content}>
      <Breadcrumbs
        current_ctg={"Coin: обзор транзакций"}
        links={[
          { to: "/dashboard", name: "Coins" },
          { to: "/dashboard/wallet", name: wallet.name },
        ]}
      />

      <div className={s.content_block}>
        <Cointitle icon={coin.image} name={coin.name} symbol={coin.symbol} price={coin.currentPrice} percent={coin.marketCapChangePercentage24h} />
        <div className={s.wallet_info}>
          <div className={s.current_block}>
            <span>{"$" + onlyNumAfterDot(2, 3)}</span>
            <span>Стоимость активов</span>
          </div>
          <div className={s.current_block}>
            <span>{"$" + "0.00"}</span>
            <span>Активы</span>
          </div>
          <div className={s.current_block}>
            <span>{onlyNumAfterDot(2, 4)}</span>
            <span>Общая стоимость</span>
          </div>
          <div className={s.current_block}>
            <span>{onlyNumAfterDot(2, 4)}</span>
            <span>Средняя чистая стоимость </span>
          </div>
          <div className={s.current_block}>
            <span>{onlyNumAfterDot(2, 4)}</span>
            <span>Прибыль / Убытки (+532162.73%)</span>
          </div>
        </div>
        <div className={s.trans_header}>
          <h1>Transactions</h1>
          <button>+ Add Transaction</button>
        </div>
        <TransactionsTable />
      </div>
    </div>
  );
  return <EmbeddedLoader/>;
};

const TransactionsTable = () => {
  return (
    <div>
      <table className={s.tr_table}>
        <tbody>
          <tr className={s.tr_header}>
            <th>Тип</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Дата</th>
            <th>Комиссии</th>
            <th>Расходы</th>
            <th>Выручка</th>
            <th>Прибыль и убытки</th>
            <th>Примечания</th>
            <th>Действие</th>
          </tr>
          <tr className={`${s.tr_row1} ${s.tr_row}`}>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
          </tr>
          <tr className={s.tr_row}>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsWallet;
