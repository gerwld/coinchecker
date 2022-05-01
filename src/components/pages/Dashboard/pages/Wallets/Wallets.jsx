import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllWalletsTC } from "../../../../../redux/reducers/wallets-reducer";

import s from "./Wallets.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import AddNewCoinPopup from "../../../../UI/popups/AddNewCoinPopup/AddNewCoinPopup";
import ShowCoinsBlock from "../../blocks/ShowCoinsBlock/ShowCoinsBlock";
import CreateNewWallet from "./CreateNewWallet/CreateNewWallet.jsx";
import SelectWalletBlock from "./SelectWalletBlock";
import EmbeddedLoader from "../../../../UI/EmbeddedLoader/EmbeddedLoader";
import { changeTitle } from "../../../../../services/title";
import { onlyNumAfter } from "../../../../../services/onlynumafter";

const Wallets = () => {
  const { walletIdURi } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { content } = useSelector(({ wallets }) => ({
    content: wallets.content,
  }));

  const [walletId, setWallet] = useState(0);
  const [isDataVisible, setVisible] = useState(true);
  const [page, setPage] = useState(0);
  const pageSize = 10;
  const coins = content && content[walletId] ? content[walletId].coins.slice(page * pageSize, (page + 1) * pageSize) : [];
  const total = content && content[walletId] ? content[walletId].coins.length : 0;
  const toggleVisibility = () => setVisible(!isDataVisible);


  useEffect(() => {
    changeTitle(`Wallets / CoinChecker`);
    dispatch(getAllWalletsTC());
    window.scrollTo(0, 1);
  }, []);

  useEffect(() => {
    if (content && walletIdURi) {
      const uriWallet = content.filter((e) => e.id == walletIdURi);
      const i = content.indexOf(uriWallet[0]);
      if (i >= 0) setWallet(i);
      else {
        setWallet(0);
        navigate("/dashboard/wallet/");
      }
    }
  }, [content, walletIdURi]);

  const onSetWallet = (index, id) => {
    setWallet(index);
    navigate("/dashboard/wallet/" + id);
    dispatch(getAllWalletsTC());
  };

  const onlyNumAfter = (n, toFixed) => {
    if (Number.isInteger(n)) return n;
    else return n.toFixed(toFixed);
  };

  const onChangePage = (page) => {
    setPage(page - 1);
  };

  return (
    <div className={s.content_block}>
      <h2 className={s.title}>Wallets</h2>
      {content ? (
        content?.length > 0 ? (
          <div className="wallets_content">
            <div className={s.head_block}>
              <div className={s.current_wallet}>
                <SelectWalletBlock content={content} walletId={walletId} select={onSetWallet} />
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
                  <span>{isDataVisible ? "$" + onlyNumAfter(content[walletId].currentUsdPrice, 3) : "..."}</span>
                  <span>Total Balance</span>
                </div>
                <div className={s.current_block}>
                  <span>{isDataVisible ? "$" + "0.00" : "..."}</span>
                  <span>24h Portfolio Change (+0%)</span>
                </div>
                <div className={s.current_block}>
                  <span>{isDataVisible ? "$" + onlyNumAfter(content[walletId].startUsdPrice, 4) : "..."}</span>
                  <span>Total Profit / Loss (-)</span>
                </div>
              </div>
              <div className={s.wallet_info_mob}>
                <div className={s.infomob_total}>
                  <span>{isDataVisible ? "$" + content[walletId].currentUsdPrice : "..."}</span>
                </div>
                <div className={`${s.infomob_subblock} ${true && s.profit}`}>
                  <span>24H Change</span>
                  <span>{isDataVisible ? "$" + "0.00" : "..."}</span>
                </div>
                <div className={`${s.infomob_subblock} ${content[walletId].startUsdPrice >= 0 && s.profit}`}>
                  <span>Total Profit / Loss</span>
                  <span>{isDataVisible ? "$" + content[walletId].startUsdPrice : "..."}</span>
                </div>
              </div>
            </div>
            <ShowCoinsBlock isWallet isShow={isDataVisible} walletId={content[walletId].id} items={coins} total={total} currPage={page + 1} pageSize={pageSize} curr_pagination={10} onChangePage={onChangePage} />
          </div>
        ) : (
          <CreateNewWallet />
        )
      ) : (
        <EmbeddedLoader />
      )}
    </div>
  );
};

export default Wallets;
