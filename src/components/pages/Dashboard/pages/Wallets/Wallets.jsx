import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import WalletService from "../../../../../api/WalletService";
import { getAllWalletsTC } from "../../../../../redux/reducers/wallets-reducer";

import s from "./Wallets.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import AddNewCoinPopup from "./AddNewCoinPopup/AddNewCoinPopup";
import ShowCoinsBlock from "../../blocks/ShowCoinsBlock/ShowCoinsBlock";
import SelectWalletBlock from "./SelectWalletBlock";
import EmbeddedLoader from "../../../../UI/EmbeddedLoader/EmbeddedLoader";

const Wallets = () => {
  const [walletId, setWallet] = useState(0);
  const [isDataVisible, setVisible] = useState(true);
  const pageSize = 10;
  const [page, setPage] = useState(0);
  const toggleVisibility = () => setVisible(!isDataVisible);

  const dispatch = useDispatch();
  const { content } = useSelector(({ wallets }) => ({
    content: wallets.content
  }));

  const coins = content && content[walletId] ? (content[walletId].coins.slice(page * pageSize, (page + 1) * pageSize)) : [];
  const total = content && content[walletId] ? content[walletId].coins.length : 0;

  useEffect(() => {
    dispatch(getAllWalletsTC());
  }, [walletId]);

  const onCreateWallet = async (name) => {
    await WalletService.createWallet(name);
    dispatch(getAllWalletsTC());
  };

  const onChangePage = (page) => {
    setPage(page - 1);
  }

  return (
    <div className={s.content_block}>
      <h2 className={s.title}>Wallets</h2>
      {content ? (content?.length > 0 ? (
        <div className="wallets_content">
          <div className={s.head_block}>
            <div className={s.current_wallet}>
            <SelectWalletBlock content={content} walletId={walletId} select={setWallet} />
            <div className={s.wallet_controls}>
              <button onClick={toggleVisibility} className={s.btn_visibility}>
                {isDataVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
              <button className={s.btn_menu}>
                <BsThreeDotsVertical />
              </button>
              <AddNewCoinPopup walletId={content[walletId].id} />
            </div>
            </div>
            <div className={s.wallet_info}>
                <div className={s.current_block}>
                  <span>{isDataVisible ? "$" + content[walletId].currentUsdPrice.toFixed(3) : "..."}</span>
                  <span>Total Balance</span>
                </div>
                <div className={s.current_block}>
                  <span>{isDataVisible ? "$" + "0.00" : "..."}</span>
                  <span>24h Portfolio Change (+0%)</span>
                </div>
                <div className={s.current_block}>
                  <span>{isDataVisible ? "$" + content[walletId].startUsdPrice : "..."}</span>
                  <span>Total Profit / Loss (-)</span>
                </div>
            </div>
           
          </div>
          <ShowCoinsBlock isWallet walletId={content[walletId].id} items={coins} total={total} currPage={page + 1} pageSize={pageSize} curr_pagination={10} onChangePage={onChangePage}/>
        </div>
      ) : (
        <CreateNewWallet create={onCreateWallet} />
      )) : <EmbeddedLoader/>}
    </div>
  );
};

const CreateNewWallet = ({ create }) => {
  const createNewWallet = () => create("My Portfolio");
  return (
    <div className={s.create_new}>
      <h2>You haven't created wallets yet. Create a new one?</h2>
      <button onClick={createNewWallet}>Create Free Wallet</button>
    </div>
  );
};

export default Wallets;
