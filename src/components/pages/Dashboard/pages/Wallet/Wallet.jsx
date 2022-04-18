import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import WalletService from "../../../../../api/WalletService";
import { getAllWalletsTC } from "../../../../../redux/reducers/wallets-reducer";
import ShowCoinsBlock from "../../blocks/ShowCoinsBlock/ShowCoinsBlock";
import s from "./Wallet.module.css";

const Wallet = () => {
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
            <div className={s.wallet_select}>My Portfolio(select)</div>
            <div className={s.current_block}>
              <span>$0.140000</span>
              <span>Total Balance</span>
            </div>
            <div className={s.current_block}>
              <span>$0.00</span>
              <span>24h Portfolio Change (+0%)</span>
            </div>
            <div className={s.current_block}>
              <span>$0.00</span>
              <span>Total Profit / Loss (-)</span>
            </div>
          </div>
          <div className={s.wallet_controls}>
            <button>visib</button>
            <button>3 dots menu</button>
            <button>Add New Coin</button>
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

export default Wallet;
