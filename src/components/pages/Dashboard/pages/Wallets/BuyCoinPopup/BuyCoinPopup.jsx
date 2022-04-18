import React from 'react'
import s from "./Buy.module.css";
import { Form, Field } from 'react-final-form'
import { buyCoinInWalletIdTC } from '../../../../../../redux/reducers/wallets-reducer';
import { useDispatch } from 'react-redux';

const BuyCoinPopup = ({id}) => {
 const dispatch = useDispatch();
 const onSubmit = (data) => {
  dispatch(buyCoinInWalletIdTC(id, data));
 }
  return (
    <div>
     <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Buy coin popup</h2>
        <div>
          <label>First Name</label>
          <Field name="amount" component="input" type="number" placeholder="Amount" required />
          <Field name="coinId" component="input" type="number" placeholder="Coin id" required/>
          <Field name="comment" component="input" placeholder="Comment" />
          <Field name="usdAmount" component="input" type="number" placeholder="Usd Amount" required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )}
  />
    </div>
  )
}

export default BuyCoinPopup