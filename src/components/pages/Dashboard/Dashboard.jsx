import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import s from "./Dashboard.module.css";
import { AsideBlock, MobileBarBlock } from "../../UI/Aside/Aside";
import { Wallets, Buysell, MainPage, FavPage, Settings, TransactionsWallet, CoinInfo } from "./pages";
import { LastNotifications, ProfSettings, SearchResultsDropDown } from "./modules";



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
              <Route path="coins/:coinId" element={<CoinInfo />}/>
              <Route path="/transactions" element={<Buysell />} />
            </Routes>
          </div>
          <div className="mob_fix" />
        </main>

        <footer className={s.footer_dash}></footer>
      </div>
      <div className="only_portrait_mobile">
        <div className="content">
          <span>Rotate your device</span>
          <div><img src="img/turn.svg" alt="Turn icon"/></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
