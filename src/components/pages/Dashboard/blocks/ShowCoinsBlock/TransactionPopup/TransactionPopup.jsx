import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import s from "./Trans.module.css";
import { useDispatch } from "react-redux";
import WalletService from "../../../../../../api/WalletService";
import { closeTransPopup } from "../../../../../../redux/reducers/dashboard-reducer";
import { getAllWalletsTC } from "../../../../../../redux/reducers/wallets-reducer";
import { IoCloseOutline } from "react-icons/io5";

const TransactionPopup = ({isFromWallet}) => {
  const dispatch = useDispatch();
  const [transType, setTransType] = useState(0);
  const { item, isShow, walletId } = useSelector(({ dashboard }) => ({
    item: dashboard.transCoin,
    isShow: dashboard.isTransPopup,
    walletId: dashboard.walletId
  }));
  const buttons = [
    { id: 0, title: "Buy" },
    { id: 1, title: "Sell" },
    { id: 2, title: "Transfer" },
  ];
  const setClose = () => {
    dispatch(closeTransPopup);
  };

  const onSubmit = async (e) => {
    const data = {
      amount: parseInt(e.amount),
      datetime: e.datetime,
      price: e.price,
      coinId: item.id,
    };
    const wallet = walletId ? walletId : 53;
    await WalletService.buyCoinInWalletId(wallet, data);
    dispatch(getAllWalletsTC());
    setClose();
  };

  if (isShow)
    return (
      <div className={s.popup_wrapper}>
        <div className={s.popup_content}>
          <button onClick={setClose} className={s.btn_close}>
            <IoCloseOutline />
          </button>
          <h2>Add Transaction to My Portfolio</h2>
          <div className={s.trans_buttons}>
            {buttons.map((e, i) => (
              <button key={i + "_transbtn"} onClick={() => setTransType(e.id)} className={e.id === transType ? s.active : ""}>
                {e.title}
              </button>
            ))}
          </div>
          <Form
            onSubmit={onSubmit}
            initialValues={{
             "price": item.currentPrice
            }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                {!isFromWallet && <div>
                  <label>
                    Select Wallet:<span className={s.red}>*</span>
                  </label>
                  <Field name="price" component="input" type="number" placeholder="USD" required />
                </div>}
                <div>
                  <label>
                    Price per coin<span className={s.red}>*</span>
                  </label>
                  <Field name="price" component="input" type="number" placeholder="USD" required />
                </div>
                <div>
                  <label>
                    Quantity<span className={s.red}>*</span>
                  </label>
                  <div className={s.amount_input}>
                    <Field name="amount" component="input" type="number" placeholder="1" required />
                    <span>{item.symbol}</span>
                  </div>
                </div>
                <div>
                  <div className={s.total_opt}>
                    <label>Total Spent</label>
                    <button type="button">Price per coin</button>
                  </div>
                  <div className={s.total_field}>
                    <Field name="usdAmount" component="input" type="number" placeholder="0" disabled />
                  </div>
                </div>
                <div>
                  <label>
                    Date<span className={s.red}>*</span>
                  </label>
                  <Field name="datetime" component="input" type="date" placeholder="Date" />
                </div>
                Fee & Notes (Opt)
                <div className={s.action_popup}>
                  <button onClick={setClose} type="button">Cancel</button>
                  <button type="submit">Submit</button>
                </div>
              </form>
            )}
          />
        </div>
        <div className={s.popup_bg} onClick={setClose} />
      </div>
    );
  return <></>;
};

export default TransactionPopup;
