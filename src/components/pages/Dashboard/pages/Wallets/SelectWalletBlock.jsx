import React from 'react'
import s from "./Wallets.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs"
import AddNewWalletPopup from "./AddNewWalletPopup copy/AddNewWalletPopup";
import withClickOutside from "../../../../../hoc/withClickOutside";

const SelectWalletBlock = withClickOutside(({content, walletId, select, setShow, isShow, refE}) => {
 //add new wallet
 const [isShowNew, setShowNew] = React.useState(false);
 const showAddNew = () => {
   setShowNew(true);
   setShow(false);
 };
 const hideAddNew = () => {
   setShowNew(false);
   setShow(false);
 };

 //select wallet
 const onSelect = (i) => {
   select(i);
   setShow(false);
 }

 const walletName = content[walletId].name.length > 12 ? content[walletId].name.slice(0, 12) + "..." : content[walletId].name;

 return (
   <div className={s.wallet_select}>
    <div className={s.select_wrapper} ref={refE}>
     <button onClick={() => setShow(!isShow)} className={`${s.btn_selected} ${isShow && s.active}`}>{walletName}<RiArrowDropDownLine /></button>
     {isShow && <ul>
       {content.map((wall, i) => <li onClick={() => onSelect(i)} key={i + "_walletselect"}><span>{wall.name}{i === walletId && <span className={s.act}><BsCheckLg/></span>}</span></li>)}

       <button onClick={showAddNew} className={s.btn_new}><AiOutlinePlus/>Add New Wallet</button>
     </ul>}
     </div>
   {isShowNew && <AddNewWalletPopup setClose={hideAddNew} />}
 </div>
 )
});

export default SelectWalletBlock;