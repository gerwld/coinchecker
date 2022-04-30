import React, { useState } from 'react';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { RiMenuFoldLine, RiSettings3Line } from 'react-icons/ri';
import { AiOutlineStar, AiOutlineWallet } from 'react-icons/ai';
import { IoRepeatSharp } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router-dom';
import s from './Aside.module.css';

export const AsideBlock = React.memo(() => {
    //Aside toggle
    const [isAsideHide, setAside] = useState(false);
    const logoText = isAsideHide ? 'CC' : 'CoinChecker';

    return (
        <aside className={`${s.aside_overlay} ${isAsideHide ? s.aside_hidden : ''}`}>
            <div className={s.logo}>{logoText}</div>
            <div className={`${s.logo} ${s.logo_mob}`}>CC</div>
            <button onClick={() => setAside(!isAsideHide)} className={s.toggleAside}><RiMenuFoldLine /></button>

            <nav className={s.aside_menu}>
                <ul>
                    <PathNameBorderNavLink/>
                    <li><NavLink to="/dashboard/fav" className={(e) => e.isActive ? s.active_a : ''}><AiOutlineStar />Saved Coins</NavLink></li>
                    <li><NavLink to="/dashboard/wallet" className={(e) => e.isActive ? s.active_a : ''}><AiOutlineWallet/>Wallet</NavLink></li>
                    <li><NavLink to="/dashboard/transactions" className={(e) => e.isActive ? s.active_a : ''}><IoRepeatSharp/>Buy & Sell</NavLink></li>
                    <li><NavLink to="/dashboard/settings" className={(e) => e.isActive ? s.active_a : ''}><RiSettings3Line/>Settings</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
});

export const MobileBarBlock = () => {
    return (
        <aside className={s.mobile_overlay}>
            <div className={s.logo}>CC</div>
            <nav className={s.mobile_menu}>
                <ul>
                    <PathNameBorderNavLink isMobile/>
                    <li><NavLink to="/dashboard/fav" className={(e) => e.isActive ? s.active_a : ''}><AiOutlineStar /></NavLink></li>
                    <li><NavLink to="/dashboard/wallet" className={(e) => e.isActive ? s.active_a : ''}><AiOutlineWallet/></NavLink></li>
                    <li><NavLink to="/dashboard/transactions" className={(e) => e.isActive ? s.active_a : ''}><IoRepeatSharp/></NavLink></li>
                    <li><NavLink to="/dashboard/settings" className={(e) => e.isActive ? s.active_a : ''}><RiSettings3Line/></NavLink></li>
                </ul>
            </nav>
        </aside>
    )
};

const PathNameBorderNavLink = React.memo(({isMobile}) => {
    const location = useLocation().pathname;
    const isBaseUrl = location === "/dashboard" || location.startsWith("/dashboard/coins/");
    return <li><NavLink to="/dashboard" className={isBaseUrl ? s.active_a : ''}><MdOutlineSpaceDashboard />{!isMobile && "Dashboard"}</NavLink></li> 
});