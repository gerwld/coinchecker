import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import s from "./Trans.module.css";
import { useDispatch } from "react-redux";
import WalletService from "../../../../../../api/WalletService";
import { closeTransPopup } from "../../../../../../redux/reducers/dashboard-reducer";
import { getAllWalletsTC } from "../../../../../../redux/reducers/wallets-reducer";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect } from "react";
import EmbeddedLoader from "../../../../../UI/EmbeddedLoader/EmbeddedLoader";
import createDecorator from 'final-form-calculate';
import { CreateWalletBtn } from "../../../pages/Wallets/Wallets";

const buttons = [
  { id: 0, title: "Buy" },
  { id: 1, title: "Sell" },
  { id: 2, title: "Transfer" },
];

const calc = createDecorator(
  {
    field: 'price',
    updates: {
      usdAmount: (curr, all) =>{
      if(curr && all.amount) {
       return (curr * (isNaN(parseInt(all.amount)) ? 0 : all.amount));
      }}
    }
  },
  {
    field: 'amount',
    updates: {
      usdAmount: (curr, all) =>{
        if(curr && all.amount) {
         return (curr * (isNaN(parseInt(all.price)) ? 0 : all.price));
        }}
      }
  })

const TransactionPopup = () => {
  const dispatch = useDispatch();
  const [transType, setTransType] = useState(0);
  const { item, isShow, walletId, wallets } = useSelector(({ dashboard, wallets }) => ({
    item: dashboard.transCoin,
    isShow: dashboard.isTransPopup,
    walletId: dashboard.walletId,
    wallets: wallets.content,
  }));

  const getTitle = (walletId) => {
    const walletObjId = wallets.find((wall) => wall.id === walletId);
    return walletObjId.name;
  };

  const setClose = () => {
    dispatch(closeTransPopup);
    setTransType(0);
  };

  const onSubmit = async (e) => {
    const data = {
      amount: transType === 1 ? (parseInt(e.amount) * -1) : parseInt(e.amount),
      datetime: e.datetime,
      price: e.price,
      coinId: item.id,
    };
    const wallet = walletId ? walletId : e.walletId;
    await WalletService.buyCoinInWalletId(wallet, data);
    dispatch(getAllWalletsTC());
    setClose();
  };

  useEffect(() => {
    if (!wallets && isShow) {
      dispatch(getAllWalletsTC());
    }
  }, [wallets, isShow]);

  if (isShow)
    return (
      <div className={s.popup_wrapper}>
        <div className={s.popup_content}>
          <button onClick={setClose} className={s.btn_close}>
            <IoCloseOutline />
          </button>
          {walletId || wallets ? (
            <div className={s.popup_info}>
              <h2>Add Transaction {walletId && "to " + getTitle(walletId)}</h2>
              <div className={s.trans_buttons}>
                {buttons.map((e, i) => (
                  <button key={i + "_transbtn"} onClick={() => setTransType(e.id)} className={e.id === transType ? s.active : ""}>
                    {e.title}
                  </button>
                ))}
              </div>
              <Form
                onSubmit={onSubmit}
                decorators={[calc]}
                initialValues={{
                  price: item.currentPrice,
                }}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>

                    {!walletId &&
                      <div className={s.select_wallet}>
                        <label>
                          Select Wallet:<span className={s.red}>*</span>
                        </label>

                        {(wallets.length === 0 
                        ? <CreateWalletBtn name={"Create New Wallet"} />
                        :<Field name="walletId" component="select" defaultValue={wallets[0]?.id} required>
                          {wallets.map((e, i) => (
                            <option key={i + "_selectwalletpopup"} value={e.id}>
                              {e.name}
                            </option>
                          ))}
                        </Field>)}

                      </div>}

                    {transType === 0 && <BuyTransaction symbol={item.symbol} />}
                    {transType === 1 && <SellTransaction symbol={item.symbol} />}

                    <div className={s.action_popup}>
                      <button onClick={setClose} type="button">
                        Cancel
                      </button>
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                )}
              />
            </div>
          ) : (
            <EmbeddedLoader />
          )}
        </div>
        <div className={s.popup_bg} onClick={setClose} />
      </div>
    );
  return <></>;
};

const BuyTransaction = ({ symbol }) => {

  return (
    <div className={s.form_content}>
      <div>
        <label>
          Price per coin<span className={s.red}>*</span>
        </label>
        <div className={s.price_field}>
        <Field name="price" component="input" type="number" autoComplete="new-password" autocomplete="off" required />
        </div>
      </div>
      <div>
        <label>
          Quantity<span className={s.red}>*</span>
        </label>
        <div className={s.amount_input}>
          <Field name="amount" component="input" type="number" placeholder="1" autoComplete="new-password" autocomplete="off" required />
          <span>{symbol}</span>
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
    </div>
  );
};

const SellTransaction = ({ symbol }) => {
  return (
    <div className={s.form_content}>
      <div>
        <label>
          Price per coin<span className={s.red}>*</span>
        </label>
        <div className={s.price_field}>
        <Field name="price" component="input" type="number" autoComplete="new-password" autocomplete="off" required />
        </div>
      </div>
      <div>
        <label>
          Quantity<span className={s.red}>*</span>
        </label>
        <div className={s.amount_input}>
          <Field name="amount" component="input" type="number" placeholder="1" autoComplete="new-password" autocomplete="off" required />
          <span>{symbol}</span>
        </div>
      </div>
      <div>
        <div className={s.total_opt}>
          <label>Total Recieved</label>
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
    </div>
  );
};

export default TransactionPopup;
