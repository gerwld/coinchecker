import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

import WalletService from "../../../../api/WalletService";
import { getAllWalletsTC } from "../../../../redux/reducers/wallets-reducer";
import s from "./Add.module.css";


const AddNewWalletPopup = ({ setClose }) => {
  const dispatch = useDispatch();
  const input = useRef(null);

  const onCreate = async (e) => {
    e?.preventDefault();
    if (input.current.value.length) {
      await WalletService.createWallet(input.current.value);
      await dispatch(getAllWalletsTC());
      setClose();
    }
  };

  return (
    <div className={s.popup_wrapper}>
      <div className={s.popup_content}>
        <button onClick={setClose} className={s.btn_close}>
          <IoCloseOutline />
        </button>
        <form onSubmit={(e) => onCreate(e)}>
          <div>
            <label>Create New Wallet</label>
            <input ref={input} type="text" placeholder="My Wallet" autoFocus required />
          </div>
          <div className={s.action_popup}>
            <button onClick={setClose} type="button">Cancel</button>
            <button onClick={onCreate} type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
      <div className={s.popup_bg} onClick={setClose} />
    </div>
  );
};

export default AddNewWalletPopup;
