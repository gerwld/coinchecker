import React, {useEffect} from "react";
import { useDispatch } from "react-redux";

import s from "./Add.module.css";
import withClickOutside from "../../../../hoc/withClickOutside";
import { earseSearch, getTransactionData,onTypeSearchTC } from  "../../../../redux/reducers/dashboard-reducer";

import { IoCloseOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import SearchCoin from "../../SearchCoin/SearchCoin";



const AddNewCoinPopup = withClickOutside(({ walletId, isShow, setShow, refE }) => {
  const dispatch = useDispatch();

  const closePopup = () => {
    setShow(false);
    dispatch(earseSearch);
  };

  const onSelect = async (coin) => {
    dispatch(getTransactionData(coin, walletId));
    closePopup();
  };

  const onTypeInput = (e) => {
    dispatch(onTypeSearchTC(e.target.value));
  };

  return (
    <>
      <button onClick={setShow} className={s.btn_addcoin}>
        Add New Coin
      </button>
      <button onClick={setShow} className={s.btn_addcoin_mob}>
        <AiOutlinePlus/>
      </button>
      {isShow && (
        <div className={s.popup_wrapper}>
          <div ref={refE} className={s.popup_content}>
            <button onClick={closePopup} className={s.btn_close}>
              <IoCloseOutline />
            </button>
            <h2>Search your favorite coin:</h2>
            <input type="text" onChange={onTypeInput} placeholder="Enter Coin Name" autoFocus />
            <SearchCoin onSelect={onSelect} />
          </div>
          <div className={s.popup_bg}/>
        </div>
      )}
    </>
  );
});

export default AddNewCoinPopup;
