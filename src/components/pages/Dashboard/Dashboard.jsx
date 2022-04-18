import React from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { RiLogoutBoxRLine, RiSettings3Line } from 'react-icons/ri';

import { Route, Routes } from 'react-router';
import withClickOutside from '../../../hoc/withClickOutside';
import s from './Dashboard.module.css';
import MainPage from './pages/MainPage';
import FavPage from './pages/FavPage';
import Settings from './pages/Settings/Settings';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AsideBlock, MobileBarBlock } from '../../UI/Aside/Aside';
import Wallets from './pages/Wallets/Wallets';
import Buysell from './pages/Buysell/Buysell';


const Dashboard = ({ block_last, logOut, ...props }) => {
    const {curr_pagination} = useSelector(({dashboard}) => ({
        curr_pagination: dashboard.curr_pagination 
    }))
    
    return (
      <div className={s.dashboard_overlay}>
        <AsideBlock />
        <MobileBarBlock />
        <div className={s.dashboard_content}>
          <header className={s.header_dash}>
            <span className={s.header_title}></span>
            <div className={s.mob_logo}>CoinChecker</div>
            <SearchResults />
            <LastNotifications />
            <ProfSettings userData={props.userData} logOut={logOut} />
          </header>

          <main className={s.main_dash}>
            <div className="mob_fix" />
            <div className={s.main_dash_content}>
            <Routes>
              <Route path="/" element={<MainPage curr_pagination={curr_pagination} />}/>
              <Route path="/fav" element={<FavPage curr_pagination={curr_pagination} />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/wallet" element={<Wallets />} />
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




const SearchResults = withClickOutside(({ refE, setShow, isShow, ...props }) => {
    return (
        <div className={s.dashboard_search} ref={refE}>
            <input onFocus={() => setShow(true)} type="text" id="db_search" />
            <div className={`${s.search_results} ${isShow ? s.show_results : ''}`}>
                <div className={s.drop_overlay}><span className={s.drop_t}>Search:</span>
                    <div>ege</div>
                </div>
            </div>
        </div>
    )
});

const ProfSettings = withClickOutside(({ refE, setShow, isShow, userData, logOut }) => {
    const username = userData?.username.length > 12 ? userData?.username.slice(0, 12) + "..." : userData?.username;
    return (
        <div className={`${s.dashboard_wrapper} ${isShow ? s.show_settings : ''}`} ref={refE}>
            <div className={s.dashboard_cuser} onClick={() => setShow(!isShow)}>
                <div className={s.cuser_avatar}><img src="/img/user.svg" alt="User Avatar" /></div>
                <span className={s.cuser_name + ' ic-dropdown'}>{username}</span>
            </div>
            <div className={s.cuser_settings}>
                <div className={s.drop_overlay}><span className={s.drop_t}>Settings:</span>
                    <ul>
                        <li><button><BiHelpCircle />Help</button></li>
                        <li><NavLink to="/dashboard/settings"><RiSettings3Line />Profile Settings</NavLink></li>
                        <li><button onClick={logOut}><RiLogoutBoxRLine />Sign Out</button></li>
                    </ul>
                </div>
            </div>
        </div>

    )
});

const LastNotifications = withClickOutside(({ refE, setShow, isShow, ...props }) => {
    return (
        <div ref={refE} className={`${s.dashboard_notifications} ${isShow ? s.show_block : ''}`}>
            <button className={s.dash_notific} onClick={() => setShow(!isShow)}>Notifications</button>
            <div className={s.notif_block}>
                <div>egeee</div>
                <div>egeee</div>
                <div>egeee</div>
            </div>
        </div>
    )
})

export default Dashboard;