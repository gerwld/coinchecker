import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import WalletService from "../../../../../api/WalletService";
import { getAllWalletsTC } from "../../../../../redux/reducers/wallets-reducer";
import ShowCoinsBlock from "../../blocks/ShowCoinsBlock/ShowCoinsBlock";
import BuyCoinPopup from "./BuyCoinPopup/BuyCoinPopup";
import s from "./Wallets.module.css";

import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";


const Wallets = () => {
  const [walletId, setWallet] = useState(0);
  const [isShowAddCoin, setShowCoin] = useState(false);
  const [isDataVisible, setVisible] = useState(true);

  const dispatch = useDispatch();
  const { content } = useSelector(({ wallets }) => ({
    content: wallets.content,
  }));

  useEffect(() => {
    dispatch(getAllWalletsTC());
  }, []);

  const onCreateWallet = async (name) => {
   await WalletService.createWallet(name);
    dispatch(getAllWalletsTC());
  }

  const onOpenAddCoin = () => {
    setShowCoin(true);
  }
  const toggleVisibility =() => {
    setVisible(!isDataVisible);
  }

  return (
    <div className={s.content_block}>
      <h2 className={s.title}>Wallets</h2>
      {content?.length 
      ? <div className="wallets_content">
        <div className={s.head_block}>
          <div className={s.current_wallet}>
            <div className={s.wallet_select}>
              <button>{content[walletId].name}<RiArrowDropDownLine /></button>
            </div>
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
            <button onClick={onOpenAddCoin} className={s.btn_addcoin}>Add New Coin</button>
            {isShowAddCoin && <BuyCoinPopup id={content[walletId].id} setShow={setShowCoin}  />}
          </div>
        </div>
        <ShowCoinsBlock isWallet items={content[walletId].coins} />
      </div>
      : <CreateNewWallet onCreate={onCreateWallet}/>}
    </div>
  );
};

const CreateNewWallet = ({onCreate}) => {
  const createNewWallet = () =>{
    onCreate("My Portfolio")
  }
  return (
    <div className={s.create_new}>
      <h2>You haven't created wallets yet. Create a new one?</h2>
      <button onClick={createNewWallet}>Create Free Wallet</button>
    </div>
  )
}

export default Wallets;
