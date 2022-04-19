import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import WalletService from "../../../../../api/WalletService";
import { getAllWalletsTC } from "../../../../../redux/reducers/wallets-reducer";
import ShowCoinsBlock from "../../blocks/ShowCoinsBlock/ShowCoinsBlock";
import s from "./Wallets.module.css";

import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical, BsCheckLg } from "react-icons/bs";
import AddNewCoinPopup from "./AddNewCoinPopup/AddNewCoinPopup";
import AddNewWalletPopup from "./AddNewWalletPopup copy/AddNewWalletPopup";
import withClickOutside from "../../../../../hoc/withClickOutside";


const Wallets = () => {
  const [walletId, setWallet] = useState(0);
  const [isDataVisible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible(!isDataVisible);

  const dispatch = useDispatch();
  const { content } = useSelector(({ wallets }) => ({
    content: wallets.content,
  }));

  useEffect(() => {
    dispatch(getAllWalletsTC());
  }, [walletId]);

  const onCreateWallet = async (name) => {
    await WalletService.createWallet(name);
    dispatch(getAllWalletsTC());
  }

  return (
    <div className={s.content_block}>
      <h2 className={s.title}>Wallets</h2>
      {content?.length 
      ? <div className="wallets_content">
        <div className={s.head_block}>
          <div className={s.current_wallet}>
           <SelectWalletBlock content={content} walletId={walletId} select={setWallet} />
            <div className={s.current_block}>
              <span>{isDataVisible ? '$' + content[walletId].currentUsdPrice : "..."}</span>
              <span>Total Balance</span>
            </div>
            <div className={s.current_block}>
              <span>{isDataVisible ? '$' + "0.00" : "..."}</span>
              <span>24h Portfolio Change (+0%)</span>
            </div>
            <div className={s.current_block}>
              <span>{isDataVisible ? '$' + content[walletId].startUsdPrice : "..."}</span>
              <span>Total Profit / Loss (-)</span>
            </div>
          </div>
          <div className={s.wallet_controls}>
            <button onClick={toggleVisibility} className={s.btn_visibility}>{isDataVisible ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}</button>
            <button className={s.btn_menu}><BsThreeDotsVertical/></button>
            <button className={s.btn_addcoin}>Add New Coin</button>
            
          </div>
        </div>
        <ShowCoinsBlock isWallet items={content[walletId].coins} />
      </div>
      : <CreateNewWallet create={onCreateWallet}/>}

      {/* popups */}
      <AddNewCoinPopup id={content[walletId].id} />
    </div>
  );
};

const SelectWalletBlock = withClickOutside(({content, walletId, select, setShow, isShow, refE}) => {
  //add new wallet
  const [isShowNew, setShowNew] = useState(false);
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

  return (
    <div className={s.wallet_select} ref={refE}>
      <button onClick={() => setShow(!isShow)} className={`${s.btn_selected} ${isShow && s.active}`}>{content[walletId].name}<RiArrowDropDownLine /></button>
      {isShow && <ul>
        {content.map((wall, i) => <li onClick={() => onSelect(i)}><span>{wall.name}{i === walletId && <span className={s.act}><BsCheckLg/></span>}</span></li>)}

        <button onClick={showAddNew} className={s.btn_new}><AiOutlinePlus/>Add New Wallet</button>
      </ul>}
    {isShowNew && <AddNewWalletPopup setClose={hideAddNew} />}
  </div>
  )
});

const CreateNewWallet = ({create}) => {
  const createNewWallet = () => create("My Portfolio");
  return (
    <div className={s.create_new}>
      <h2>You haven't created wallets yet. Create a new one?</h2>
      <button onClick={createNewWallet}>Create Free Wallet</button>
    </div>
  )
}

export default Wallets;
