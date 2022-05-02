import React from "react";
import { Field } from "react-final-form";
import FeeNotes from "../FeeNotes";
import SwapSelect from "../popups/SwapSelect";
import s from "../Trans.module.css";

const SwapTransaction = ({ symbol, amount, isFee, setFee, sFrom, sTo, setSTo, setSFrom }) => {
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
          <Field name="from-amount" component="input" placeholder="1" autoComplete="new-password" autoComplete="off" required />
          <SwapSelect symbol={sFrom} onSelect={setSFrom} />
        </div>
      </div>

      <div>
        <div className={s.quantity_swap}>
          <label>
            To amount<span className={s.red}>*</span>
          </label>
        </div>
        <div className={s.amount_input}>
          <Field name="to-amount" component="input" placeholder="1" autoComplete="new-password" autoComplete="off" required />
          <SwapSelect symbol={sTo} onSelect={setSTo}  />
        </div>
      </div>

      <div>
        <label>
          Total price<span className={s.red}>*</span>
        </label>
        <div className={s.price_field}>
          <Field name="tot-price" component="input" autoComplete="new-password" autoComplete="off" required />
        </div>
      </div>

      <div>
        <label>
          Date
        </label>
        <Field name="datetime" component="input" type="date" placeholder="Date" />
      </div>
      <FeeNotes isFee={isFee} setFee={setFee} />
    </div>
  );
};

export default SwapTransaction;
