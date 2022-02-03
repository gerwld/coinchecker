import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Aside.module.css';
import { RiMenuFoldLine } from 'react-icons/ri';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

const AsideBlock = (props) => {
    return (
        <aside className={s.aside_overlay}>
            <div className={s.logo}>CoinChecker</div>
            <button className={s.toggleAside}><RiMenuFoldLine/></button>

            <nav className={s.aside_menu}>
                <ul>
                    <li><NavLink exact to="/dashboard" className={(e) => e.isActive ? s.active_a : '' }><MdOutlineSpaceDashboard/>Dashboard</NavLink></li>
                    <li><NavLink to="/Inventory" className={s.dropdown}>Inventory</NavLink></li>
                    <li><NavLink to="/" className={s.dropdown}>CRM</NavLink></li>
                    <li><NavLink to="/">Orders</NavLink></li>
                    <li><NavLink to="/">Stocks</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
};

export default AsideBlock;