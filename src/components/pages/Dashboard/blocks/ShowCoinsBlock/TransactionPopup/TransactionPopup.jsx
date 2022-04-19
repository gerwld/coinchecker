import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Form, Field } from 'react-final-form'
import s from "./Trans.module.css";
import { useDispatch } from "react-redux";
import WalletService from "../../../../../../api/WalletService";

const TransactionPopup = ({  }) => {
 const [transType, setTransType] = useState(0);
 const {item, isShow} = useSelector(({dashboard}) => ({
  item: dashboard.transCoin,
  isShow: dashboard.isTransPopup
 }))
 const setClose = () => {

 }

 const onSubmit = async (e) => {
  const data = {
   amount: e.amount,
   datetime: e.datetime,
   price: e.price,
   coinId: item.id
  }
  await WalletService.buyCoinInWalletId(53, data);
  console.log(data);
 }
 
 if(isShow) return (
    <div className={s.popup_wrapper}>
      <div className={s.popup_content}>
      <button onClick={setClose} className={s.btn_close}>close</button>
      <div className="transaction_type">
       <button>Buy</button>
       <button>Sell</button>
       <button>Transfer</button>
      </div>
      <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Add Transaction to My Portfolio</h2>

        <div>
          <label>Price per coin</label>
          <Field name="price" component="input" placeholder="USD" required />
        </div>

        <div>
          <label>Quantity</label>
          <Field name="amount" component="input" placeholder="1" required/>
          <span>{item.symbol}</span>
        </div>

        <div>
          <label>Total Spent</label>
          <Field name="usdAmount" component="input" placeholder="0" disabled/>
        </div>

        <div>
          <label>Date</label>
          <Field name="datetime" component="input" type="date" placeholder="Date" required />
        </div>

        Fee & Notes (Opt)

        <button type="submit">Submit</button>
      </form>
    )}
  />
      </div>
      <div className={s.popup_bg} onClick={setClose}/>
    </div>
  );
  return <></>;
};

export default TransactionPopup;
