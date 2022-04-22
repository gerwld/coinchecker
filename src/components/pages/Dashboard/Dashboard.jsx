import React from "react";
import { Route, Routes } from "react-router";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import withClickOutside from "../../../hoc/withClickOutside";
import { earseSearch, onTypeSearchTC } from "../../../redux/reducers/dashboard-reducer";

import s from "./Dashboard.module.css";
import { BiHelpCircle } from "react-icons/bi";
import { RiLogoutBoxRLine, RiSettings3Line } from "react-icons/ri";

import SearchCoin from "../../UI/SearchCoin/SearchCoin";
import { AsideBlock, MobileBarBlock } from "../../UI/Aside/Aside";

import Wallets from "./pages/Wallets/Wallets";
import Buysell from "./pages/Buysell/Buysell";
import MainPage from "./pages/MainPage";
import FavPage from "./pages/FavPage";
import Settings from "./pages/Settings/Settings";
import TransactionsWallet from "./pages/TransactionsWallet/TransactionsWallet";

const Dashboard = ({ logOut, userData }) => {
  const { curr_pagination } = useSelector(({ dashboard }) => ({
    curr_pagination: dashboard.curr_pagination,
  }));

  return (
    <div className={s.dashboard_overlay}>
      <AsideBlock />
      <MobileBarBlock />
      <div className={s.dashboard_content}>
        <header className={s.header_dash}>
          <span className={s.header_title}></span>
          <div className={s.mob_logo}>CoinChecker</div>
          <SearchResultsDropDown />
          <LastNotifications />
          <ProfSettings userData={userData} logOut={logOut} />
        </header>

        <main className={s.main_dash}>
          <div className="mob_fix" />
          <div className={s.main_dash_content}>
            <Routes>
              <Route path="/" element={<MainPage curr_pagination={curr_pagination} />} />
              <Route path="/fav" element={<FavPage curr_pagination={curr_pagination} />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/wallet" element={<Wallets />} />
              <Route path="/wallet/ts/:walletId/:coinId" element={<TransactionsWallet />} />
              <Route path="/transactions" element={<Buysell />} />
            </Routes>
          </div>
          <div className="mob_fix" />
        </main>

        <footer className={s.footer_dash}></footer>
      </div>
    </div>
  );
};

const SearchResultsDropDown = React.memo(
  withClickOutside(({ refE, setShow, isShow }) => {
    return (
      <div className={s.dashboard_search} ref={refE}>
        <SearchHeader setShow={setShow} isShow={isShow} />
      </div>
    );
  })
);

const SearchHeader = ({ setShow, isShow }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTypeInput = (e) => {
    dispatch(onTypeSearchTC(e.target.value));
  };

  const onBlurSearch = (e) => {
    setTimeout(() => {
        dispatch(earseSearch);
        setShow(false);
    }, 120);
    e.target.value = "";
    
  };

  const onSelect = (coin) => {
    navigate(`/dashboard/coins/${coin.id}`);
    setShow(false);
  };

  return (
    <>
      <input onFocus={() => setShow(true)} onBlur={onBlurSearch} onChange={onTypeInput} type="text" id="db_search" autoComplete="new-password" autocomplete="off" />
      <div className={`${s.search_results} ${isShow ? s.show_results : ""}`}>
        <div className={s.drop_overlay}>
          <SearchCoin onSelect={onSelect} isHeader />
        </div>
      </div>
    </>
  );
};

const ProfSettings = React.memo(
  withClickOutside(({ refE, setShow, isShow, userData, logOut }) => {
    const username = userData?.username.length > 12 ? userData?.username.slice(0, 12) + "..." : userData?.username;
    const close = () => {
      setShow(!isShow);
    };
    return (
      <div className={`${s.dashboard_wrapper} ${isShow ? s.show_settings : ""}`} ref={refE}>
        <div className={s.dashboard_cuser} onClick={close}>
          <div className={s.cuser_avatar}>
            <img src="/img/user.svg" alt="User Avatar" />
          </div>
          <span className={s.cuser_name + " ic-dropdown"}>{username}</span>
        </div>
        <div className={s.cuser_settings}>
          <div className={s.drop_overlay}>
            <span className={s.drop_t}>Settings:</span>
            <ul>
              <li>
                <button>
                  <BiHelpCircle />
                  Help
                </button>
              </li>
              <li>
                <NavLink to="/dashboard/settings">
                  <RiSettings3Line />
                  Profile Settings
                </NavLink>
              </li>
              <li>
                <button onClick={logOut}>
                  <RiLogoutBoxRLine />
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  })
);

const LastNotifications = React.memo(
  withClickOutside(({ refE, setShow, isShow, ...props }) => {
    return (
      <div ref={refE} className={`${s.dashboard_notifications} ${isShow ? s.show_block : ""}`}>
        <button className={s.dash_notific} onClick={() => setShow(!isShow)}>
          Notifications
        </button>
        <div className={s.notif_block}>
          <div>egeee</div>
          <div>egeee</div>
          <div>egeee</div>
        </div>
      </div>
    );
  })
);

export default Dashboard;
