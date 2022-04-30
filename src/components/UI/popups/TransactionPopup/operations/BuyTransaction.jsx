import React from "react";
import { Field } from 'react-final-form';

import s from "../Trans.module.css";

const BuyTransaction = ({ symbol, amount }) => {
  return (
    <div className={s.form_content}>
      <div>
        <label>
          Price per coin<span className={s.red}>*</span>
        </label>
        <div className={s.price_field}>
          <Field name="price" component="input" autoComplete="new-password" autoComplete="off" required />
        </div>
      </div>
      <div>
      <div className={s.quantity_swap}>
       <label>
         Amount<span className={s.red}>*</span>
       </label>
       {amount && <span className={s.balance}>Balance: {amount} <span>{symbol}</span></span>}
       </div>
        <div className={s.amount_input}>
          <Field name="amount" component="input" placeholder="1" autoComplete="new-password" autoComplete="off" required />
          <span>{symbol}</span>
        </div>
      </div>
      <div>
        <div className={s.total_opt}>
          <label>Total Spent</label>
          {/* <button type="button">Price per coin</button> */}
        </div>
        <div className={s.total_field}>
          <Field name="usdAmount" component="input" placeholder="0" disabled />
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

export default BuyTransaction;
