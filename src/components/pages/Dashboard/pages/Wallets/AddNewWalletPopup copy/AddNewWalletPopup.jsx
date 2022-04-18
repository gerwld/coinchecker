import React from "react";
import { useDispatch } from "react-redux";
import s from "./Add.module.css";

const AddNewWalletPopup = ({ setClose }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.popup_wrapper}>
      <div className={s.popup_content}>
      <button onClick={setClose} className={s.btn_close}>close</button>
      <div>
        <label>New Wallet</label>
      <input type="text" placeholder="My Wallet" />
      </div>
      <div className={s.action_popup}>
      <button onClick={setClose}>Cancel</button>
      <button>Create</button>
      </div>
      </div>
    </div>
  );
};

export default AddNewWalletPopup;
