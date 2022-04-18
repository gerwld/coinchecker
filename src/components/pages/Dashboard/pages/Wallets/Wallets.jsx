import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import WalletService from "../../../../../api/WalletService";
import { getAllWalletsTC } from "../../../../../redux/reducers/wallets-reducer";
import ShowCoinsBlock from "../../blocks/ShowCoinsBlock/ShowCoinsBlock";
import BuyCoinPopup from "./BuyCoinPopup/BuyCoinPopup";
import s from "./Wallets.module.css";

const Wallets = () => {
  const [walletId, changeWallet] = useState(0);
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

  return (
    <div className={s.content_block}>
      <h2 className={s.title}>Wallets</h2>
      {content?.length 
      ? <div className="wallets_content">
        <div className={s.head_block}>
          <div className={s.current_wallet}>
            <div className={s.wallet_select}>{content[walletId].name}(select)</div>
            <div className={s.current_block}>
              <span>${content[walletId].currentUsdPrice}</span>
              <span>Total Balance</span>
            </div>
            <div className={s.current_block}>
              <span>$0.00</span>
              <span>24h Portfolio Change (+0%)</span>
            </div>
            <div className={s.current_block}>
              <span>${content[walletId].startUsdPrice}</span>
              <span>Total Profit / Loss (-)</span>
            </div>
          </div>
          <div className={s.wallet_controls}>
            <button>visib</button>
            <button>3 dots menu</button>
            <button>Add New Coin</button>
            <BuyCoinPopup id={content[walletId].id} />
          </div>
        </div>
        <ShowCoinsBlock isWallet />
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
