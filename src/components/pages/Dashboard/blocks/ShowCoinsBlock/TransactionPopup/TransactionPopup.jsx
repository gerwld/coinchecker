import React from "react";
import { useSelector } from "react-redux";
import s from "./Trans.module.css";

const TransactionPopup = ({  }) => {
 const {item, isShow} = useSelector(({dashboard}) => ({
  item: dashboard.transCoin,
  isShow: dashboard.isTransPopup
 }))
 const setClose = () => {
  
 }
 
 if(isShow) return (
    <div className={s.popup_wrapper}>
      <div className={s.popup_content}>
      <button onClick={setClose} className={s.btn_close}>close</button>
      
      </div>
      <div className={s.popup_bg} onClick={setClose}/>
    </div>
  );
  return <></>;
};

export default TransactionPopup;
