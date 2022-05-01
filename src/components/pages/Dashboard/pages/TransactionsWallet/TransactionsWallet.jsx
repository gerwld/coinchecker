import React, { useEffect } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTransactionData } from "../../../../../redux/reducers/dashboard-reducer";
import { getWalletTC, resWallet } from "../../../../../redux/reducers/wallets-reducer";
import Breadcrumbs from "../../../../UI/Breadcrumbs/Breadcrumbs";
import Cointitle from "../../../../UI/CoinTitle/Cointitle";
import EmbeddedLoader from "../../../../UI/EmbeddedLoader/EmbeddedLoader";
import TransactionPopup from "../../../../UI/popups/TransactionPopup/TransactionPopup";
import s from "./TransactionsWallet.module.css";
import { changeTitle } from "../../../../../services/title";
import ErrorScreen from "../../../../UI/ErrorScreen/ErrorScreen";
import { onlyNumAfter } from "../../../../../services/onlynumafter";
import Pagination from "rc-pagination";

const TransactionsWallet = () => {
  const dispatch = useDispatch();
  const { walletId, coinId } = useParams();
  const { wallet, coin, isLoaded, error } = useSelector(({ wallets }) => ({
    wallet: wallets.currentWallet,
    coin: wallets.currentCoin,
    isLoaded: wallets.isTransCurrLoaded,
    error: wallets.error
  }));

  useEffect(() => {
    return () => dispatch(resWallet);
  }, []);

  useEffect(() => {
    if (coin && coin.symbol) {
      changeTitle(`${coin.symbol.toUpperCase()}: Transactions review / CoinChecker`);
    }
  }, [coin]);

  useEffect(() => {
    if (!isNaN(walletId)) {
      dispatch(getWalletTC(walletId, coinId));
    }
  }, [walletId, coinId]);

  const onAddTransaction = () => {
    dispatch(getTransactionData(coin, parseInt(walletId)));
  };

  if(error) return <ErrorScreen error={error} withIcon/>;
  else if (isLoaded && !error) return (
      <div className={s.trans_content}>
        <Breadcrumbs
          current_ctg={`${coin.symbol.toUpperCase()}: обзор транзакций`}
          links={[
            { to: "/dashboard", name: "Coins" },
            { to: `/dashboard/wallet/${wallet.id}`, name: wallet.name },
          ]}
        />

        <div className={s.content_block}>
          <Cointitle icon={coin.image} name={coin.name} symbol={coin.symbol} price={coin.currentPrice} percent={coin.marketCapChangePercentage24h} />
          <div className={s.wallet_info}>
            <div className={s.current_block}>
              <span>{"$" + onlyNumAfter(2, 3)}</span>
              <span>Стоимость активов</span>
            </div>
            <div className={s.current_block}>
              <span>{"$" + "0.00"}</span>
              <span>Активы</span>
            </div>
            <div className={s.current_block}>
              <span>{onlyNumAfter(2, 4)}</span>
              <span>Общая стоимость</span>
            </div>
            <div className={s.current_block}>
              <span>{onlyNumAfter(2, 4)}</span>
              <span>Средняя чистая стоимость </span>
            </div>
            <div className={s.current_block}>
              <span>{onlyNumAfter(2, 4)}</span>
              <span>Прибыль / Убытки (+532162.73%)</span>
            </div>
          </div>
          <div className={s.trans_header}>
            <h1>Transactions</h1>
            <button onClick={onAddTransaction}>+ Add Transaction</button>
          </div>
          <TransactionsTable currPrice={coin.currentPrice} />
        </div>
        <TransactionPopup />
      </div>
    ); 
  return (
    <div className={s.content_block}>
      <EmbeddedLoader />
    </div>
  );
};

const TransactionsTable = ({ currPrice }) => {
  const { items } = useSelector(({ wallets }) => ({
    items: wallets.currentTransactions,
  }));
  const [page, setPage] = React.useState(0);
  const pageSize = 10;
  const transactions = items ? items.slice(page * pageSize, (page + 1) * pageSize) : [];

  const onSetPage = (i) => {
    setPage(i - 1);
  }
  if (items)
    return (
      <div>
        <table className={s.tr_table}>
          <tbody>
            <tr className={s.tr_header}>
              <th>Type</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Fees</th>
              <th>Cost</th>
              <th>Proceeds</th>
              <th>PNL</th>
              <th>Notes</th>
              <th>Action</th>
            </tr>
            {items.length === 0 
            ? <td colspan="100%" className={s.noitems}>No items to show.</td>
            : transactions.map((e, i) => {
              const profitLose = e.toAmount * e.usdAmount - currPrice * e.toAmount;
              return (
                <tr className={`${s.tr_row} ${s[i]}`} key={e.comment + e.usdAmount + i + "_trtb"}>
                  <td className={e.type === "WITHDRAW" ? "red" : ""}>{e.type}</td>
                  <td>{e.usdAmount}$</td>
                  <td className={e.toAmount < 0 ? "red" : ""}>{e.toAmount?.toFixed(1)}</td>
                  <td>26 Apr 2022 01:23 PM UTC</td>
                  <td>0.0$</td>
                  <td>{e.type === "BUY" ? e.usdAmount + "$" : "-"}</td>
                  {e.type === "WITHDRAW" ? <td className="black">{e.usdAmount}$</td> : <td>-</td>}
                  <td>{profitLose}$</td>
                  <td>{e.comment}</td>
                  <td>
                    <div className={s.trans_btns}>
                      <button><BiEdit /></button>
                      <button><MdOutlineDelete /></button>
                    </div>
                  </td>
                </tr>
              );
            })}

          </tbody>
        </table>
        <Pagination current={page + 1} total={items.length} pageSize={pageSize} onChange={onSetPage}/>
      </div>
    );
  else
    return (
      <div className={s.loader}>
        <EmbeddedLoader />
      </div>
    );
};

export default TransactionsWallet;
