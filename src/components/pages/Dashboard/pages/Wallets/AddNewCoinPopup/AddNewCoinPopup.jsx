import React from "react";
import { useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";

import s from "./Add.module.css";
import { buyCoinInWalletIdTC } from "../../../../../../redux/reducers/wallets-reducer";
import { useSelector } from "react-redux";

const AddNewCoinPopup = ({ id, setShow }) => {
  const dispatch = useDispatch();
  const {lastCoins} = useSelector(({dashboard}) => ({
    lastCoins: dashboard.last_coins
  }))
  const onSubmit = (data) => {
    dispatch(buyCoinInWalletIdTC(id, data));
  };
  return (
    <div className={s.popup_wrapper}>
      <div className={s.popup_content}>
      <button onClick={() => setShow(false)} className={s.btn_close}>close</button>
      <h2>Search your favorite coin:</h2>
      <input type="text" placeholder="Enter Coin Name"/>
      <div className={s.trending}>
        <h3>Users often searched:</h3>
        {lastCoins.slice(0, 10).map(coin => <SearchElem name={coin.name} icon={coin.image} id={coin.id} symb={coin.symbol}/>)}
      </div>
      </div>
    </div>
  );
};


const SearchElem = ({name, icon, symb, id}) => {
  return (
    <div className={s.search_elem}>
      <div className={s.icon}><img src={icon} alt="" /></div>
      <span>{name} <span className={s.symb}>({symb})</span></span>
    </div>
  )
}

export default AddNewCoinPopup;
