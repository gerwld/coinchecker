import React from 'react';
import { Field } from 'react-final-form';
import s from "../Trans.module.css";

const TransTransaction = ({ symbol, amount }) => {
 return (
   <div className={s.form_content}>
     <div className={s.select_swap}>
       <label>
         Transfer type:<span className={s.red}>*</span>
       </label>
       <div className="select-wrapper">
         <Field name="swap_type" component="select" defaultValue="arrive" required>
           <option value="arrive">Поступление</option>
           <option value="withdraw">Вывод</option>
         </Field>
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
       <label>
         Date<span className={s.red}>*</span>
       </label>
       <Field name="datetime" component="input" type="date" placeholder="Date" />
     </div>
     Fee & Notes (Opt)
   </div>
 );
};


export default TransTransaction;