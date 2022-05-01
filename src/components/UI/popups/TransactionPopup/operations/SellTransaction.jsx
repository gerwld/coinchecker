import React from "react";
import { Field } from 'react-final-form';
import s from "../Trans.module.css";


const SellTransaction = ({ symbol, amount, isFee, setFee }) => {
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
          <label>Total Recieved</label>
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
      <div className={s.feenotes}>
        <div className={`${s.content} ${isFee ? s.open : ''}`} aria-expanded={isFee}>
        <div>
          <label>Fees</label>
          <div className={s.price_field}>
            <Field name="fees" component="input" autoComplete="new-password" autoComplete="off" placeholder="0" />
          </div>
        </div>
        <div>
          <label>Notes</label>
            <Field name="notes" component="input" autoComplete="new-password" autoComplete="off" placeholder="" />
        </div>
        </div>
        <button onClick={setFee} type="button">+ Fee & Notes <span>(Optional)</span></button>
      </div>
    </div>
  );
};

export default SellTransaction;
