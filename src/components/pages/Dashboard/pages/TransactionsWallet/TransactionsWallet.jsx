import moment from "moment";
import Pagination from "rc-pagination";
import React, { useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { IoArrowDownOutline, IoArrowUpOutline, IoSwapHorizontalOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTransactionData } from "../../../../../redux/reducers/dashboard-reducer";
import { getWalletTC, resWallet } from "../../../../../redux/reducers/wallets-reducer";
import { onlyNumAfter } from "../../../../../services/onlynumafter";
import { changeTitle } from "../../../../../services/title";
import Breadcrumbs from "../../../../UI/Breadcrumbs/Breadcrumbs";
import Cointitle from "../../../../UI/CoinTitle/Cointitle";
import EmbeddedLoader from "../../../../UI/EmbeddedLoader/EmbeddedLoader";
import ErrorScreen from "../../../../UI/ErrorScreen/ErrorScreen";
import TransactionPopup from "../../../../UI/popups/TransactionPopup/TransactionPopup";
import s from "./TransactionsWallet.module.css";

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

  const onAddTransCallBack = () => {
    dispatch(getWalletTC(walletId, coinId));
  };

  if(error) return <ErrorScreen error={error} withIcon/>;
  else if (isLoaded && !error) return (
      <div className={s.trans_content}>
        <Breadcrumbs
          current_ctg={`${coin.symbol.toUpperCase()}: Transactions review`}
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
        <TransactionPopup onCallback={onAddTransCallBack}/>
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

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

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
              <th>Costs</th>
              <th>Proceeds</th>
              <th>PNL</th>
              <th>Notes</th>
              <th>Action</th>
            </tr>
            {items.length === 0 
            ? <td colspan="100%" className={s.noitems}>No items to show.</td>
            : transactions.map((e, i) => {
              const profitLose = e.toAmount * e.usdAmount - currPrice * e.toAmount;
              let usdAmountFm = formatter.format(e.usdAmount).replace(/\D00(?=\D*$)/, '');
              let prNLoans = formatter.format(profitLose).replace(/\D00(?=\D*$)/, '');
              return (
                <tr className={`${s.tr_row} ${s[i]}`} key={e.comment + e.usdAmount + i + "_trtb"}>
                  <TransTypeElem type={e.type}/>
                  
                  <td>{usdAmountFm}$</td>
                  <td className={e.toAmount < 0 ? "red" : ""}>{e.toAmount?.toFixed(1)}</td>
                  <td>{moment("26 Apr 2022 01:23 PM UTC").format('LL HH:mm')}</td>
                  <td>{e.type === "BUY" ? usdAmountFm + "$" : "-"}</td>
                  {e.type === "WITHDRAW" ? <td className="black">{usdAmountFm}$</td> : <td>-</td>}
                  <td>{prNLoans}$</td>
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

const TransTypeElem = ({type}) => {

  return (
    <td className={`${type === "WITHDRAW" ? "red" : ""} ${s.type_row}`}>
    <div>
      {type === "SWAP" && <IoSwapHorizontalOutline />}
      {type === "WITHDRAW" && <IoArrowUpOutline />}
      {type === "BUY" && <IoArrowDownOutline />}
    </div>
    {type}
    </td>
  )
}

export default TransactionsWallet;
