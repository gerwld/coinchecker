import React, { useState } from 'react';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { RiMenuFoldLine, RiSettings3Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import s from './Aside.module.css';

const AsideBlock = (props) => {
    //Aside toggle
    const [isAsideHide, setAside] = useState(false);
    const logoText = isAsideHide ? 'CC' : 'CoinChecker';

    return (
        <aside className={`${s.aside_overlay} ${isAsideHide ? s.aside_hidden : ''}`}>
            <div className={s.logo}>{logoText}</div>
            <button onClick={() => setAside(!isAsideHide)} className={s.toggleAside}><RiMenuFoldLine /></button>

            <nav className={s.aside_menu}>
                <ul>
                    <li><NavLink to="/dashboard" className={(e) => e.isActive ? s.active_a : ''}><MdOutlineSpaceDashboard />Dashboard</NavLink></li>
                    <li><NavLink to="/dashboard/fav" className={s.dropdown}>Saved Coins</NavLink></li>
                    <li><NavLink to="/" className={s.dropdown}>CRM</NavLink></li>
                    <li><NavLink to="/">Orders</NavLink></li>
                    <li><NavLink to="/">Stocks</NavLink></li>
                    <li><NavLink to="/settings"><RiSettings3Line/>Settings</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
};

export default AsideBlock;