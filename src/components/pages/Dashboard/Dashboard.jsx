import React from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { RiLogoutBoxRLine, RiSettings3Line } from 'react-icons/ri';

import { Route, Routes } from 'react-router';
import withClickOutside from '../../../hoc/withClickOutside';
import s from './Dashboard.module.css';
import MainPage from './pages/MainPage';
import FavPage from './pages/FavPage';
import Settings from './pages/Settings';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AsideBlock, MobileBarBlock } from '../../UI/Aside/Aside';


const Dashboard = ({ block_last, logOut, ...props }) => {
    const {show_last} = useSelector(({dashboard}) => ({
        show_last: dashboard.show_last 
    }))
    
    return (
        <div className={s.dashboard_overlay}>
            <AsideBlock />
            <MobileBarBlock/>
            <div className={s.dashboard_content}>
                <header className={s.header_dash}>
                    <span className={s.header_title}></span>
                    <div className={s.mob_logo}>CoinChecker</div>
                    <SearchResults />
                    <LastNotifications />
                    <ProfSettings userData={props.userData} logOut={logOut} />
                </header>

                <main className={s.main_dash}>
                    <Routes>
                        <Route path="/" element={<MainPage block_last={block_last} show_last={show_last} />} />
                        <Route path="/fav" element={<FavPage show_last={show_last} />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </main>

                <footer className={s.footer_dash}></footer>
            </div>
        </div>
    )
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

const ProfSettings = withClickOutside(({ refE, setShow, isShow, userData, logOut, ...props }) => {
    return (
        <div className={`${s.dashboard_wrapper} ${isShow ? s.show_settings : ''}`} ref={refE}>
            <div className={s.dashboard_cuser} onClick={() => setShow(!isShow)}>
                <div className={s.cuser_avatar}><img src="/img/user.svg" alt="User Avatar" /></div>
                <span className={s.cuser_name + ' ic-dropdown'}>{userData ? userData.username : ''}</span>
            </div>
            <div className={s.cuser_settings}>
                <div className={s.drop_overlay}><span className={s.drop_t}>Settings:</span>
                    <ul>
                        <li><button><RiSettings3Line />Profile Settings</button></li>
                        <li><NavLink to="/dashboard/settings"><BiHelpCircle />Help</NavLink></li>
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