import React, { useState } from 'react';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { RiMenuFoldLine, RiSettings3Line } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';
import s from './Aside.module.css';

const AsideBlock = (props) => {
    //Aside toggle
    const [isAsideHide, setAside] = useState(false);
    const isBaseUrl = useLocation().pathname === "/dashboard";
    console.log(isBaseUrl);
    const logoText = isAsideHide ? 'CC' : 'CoinChecker';

    return (
        <aside className={`${s.aside_overlay} ${isAsideHide ? s.aside_hidden : ''}`}>
            <div className={s.logo}>{logoText}</div>
            <button onClick={() => setAside(!isAsideHide)} className={s.toggleAside}><RiMenuFoldLine /></button>

            <nav className={s.aside_menu}>
                <ul>
                    <li><NavLink to="/dashboard" className={isBaseUrl ? s.active_a : ''}><MdOutlineSpaceDashboard />Dashboard</NavLink></li>
                    <li><NavLink to="/dashboard/fav" className={(e) => e.isActive ? s.active_a : ''}><AiOutlineStar />Saved Coins</NavLink></li>
                    <li><NavLink to="/dashboard" className={s.dropdown}>CRM</NavLink></li>
                    <li><NavLink to="/dashboard">Orders</NavLink></li>
                    <li><NavLink to="/dashboard">Stocks</NavLink></li>
                    <li><NavLink to="/dashboard/settings" className={(e) => e.isActive ? s.active_a : ''}><RiSettings3Line/>Settings</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
};

export default AsideBlock;