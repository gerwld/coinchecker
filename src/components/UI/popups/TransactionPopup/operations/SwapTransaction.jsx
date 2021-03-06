import React from "react";
import { Field } from "react-final-form";
import SwapSelect from "../popups/SwapSelect";
import s from "../Trans.module.css";

const SwapTransaction = ({ symbol, amount, sFrom, sTo, setSTo, setSFrom }) => {
  return (
    <div className={s.form_content}>
      <div>
        <div className={s.quantity_swap}>
          <label>
            From amount<span className={s.red}>*</span>
          </label>
          {amount && (
            <span className={s.balance}>
              Balance: {amount} <span>{symbol}</span>
            </span>
          )}
        </div>
        <div className={s.amount_input}>
          <Field name="from_amount" component="input" placeholder="1" autoComplete="new-password" autoComplete="off" required />
          <SwapSelect item={sFrom} onSelect={setSFrom} />
        </div>
      </div>

      <div>
        <div className={s.quantity_swap}>
          <label>
            To amount<span className={s.red}>*</span>
          </label>
        </div>
        <div className={s.amount_input}>
          <Field name="to_amount" component="input" placeholder="1" autoComplete="new-password" autoComplete="off" required />
          <SwapSelect item={sTo} onSelect={setSTo}  />
        </div>
      </div>

      <div>
        <label>
          Total price<span className={s.red}>*</span>
        </label>
        <div className={s.price_field}>
          <Field name="usdAmount" component="input" autoComplete="new-password" autoComplete="off" required />
        </div>
      </div>

      <div>
        <label>
          Date
        </label>
        <Field name="datetime" component="input" type="date" placeholder="Date" />
      </div>
    </div>
  );
};

export default SwapTransaction;
