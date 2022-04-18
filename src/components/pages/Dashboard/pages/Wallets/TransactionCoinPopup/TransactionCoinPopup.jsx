import React from "react";
import { useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";

import s from "./Buy.module.css";
import { buyCoinInWalletIdTC } from "../../../../../../redux/reducers/wallets-reducer";

const BuyCoinPopup = ({ id, setShow }) => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(buyCoinInWalletIdTC(id, data));
  };
  return (
    <div className={s.popup_wrapper}>
      <div className={s.popup_content}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <h2>Buy coin popup</h2>
              <div>
                <label>Amount</label>
                <Field
                  name="amount"
                  component="input"
                  type="number"
                  placeholder="Amount"
                  required
                />
              </div>
              <div>
                <label>Coin id</label>
                <Field
                  name="coinId"
                  component="input"
                  type="number"
                  placeholder="Coin id"
                  required
                />
              </div>
              <div>
                <label>Comment</label>
                <Field name="comment" component="input" placeholder="Comment" />
              </div>
              <div>
                <label>Usd Amount</label>
                <Field
                  name="usdAmount"
                  component="input"
                  type="number"
                  placeholder="Usd Amount"
                  required
                />
              </div>
              <button onClick={() => setShow(false)}type="button">Cancel</button>
              <button type="submit">Submit</button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default BuyCoinPopup;
