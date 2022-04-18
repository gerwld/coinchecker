import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import WalletService from "../../../../../../api/WalletService";
import { getAllWalletsTC } from "../../../../../../redux/reducers/wallets-reducer";
import s from "./Add.module.css";

const AddNewWalletPopup = ({ setClose }) => {
  const dispatch = useDispatch();
  const input = useRef(null);
  const onCreate = async () => {
    if(input.current.value.length) {
      await WalletService.createWallet(input.current.value);
      await dispatch(getAllWalletsTC());
      setClose();
    }
  }


  return (
    <div className={s.popup_wrapper}>
      <div className={s.popup_content}>
      <button onClick={setClose} className={s.btn_close}>close</button>
      <form onSubmit={e => e.preventDefault()}>
      <div>
        <label>New Wallet</label>
        <input ref={input} type="text" placeholder="My Wallet" required/>
      </div>
      <div className={s.action_popup}>
      <button onClick={setClose}>Cancel</button>
      <button onClick={onCreate} type="submit">Create</button>
      </div>
      </form>
      </div>
    </div>
  );
};

export default AddNewWalletPopup;