import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Aside.module.css';

const AsideBlock = (props) => {
    return (
        <aside className={s.aside_overlay}>
            <div className={s.logo}><img src="" alt="CoinChecker" /></div>
            <button className={s.toggleAside}></button>

            <nav className={s.aside_menu}>
                <ul>
                    <li><NavLink to="/dashboard/*">Dashboard</NavLink></li>
                    <li><NavLink to="/Inventory">Inventory</NavLink></li>
                    <li><NavLink to="/">CRM</NavLink></li>
                    <li><NavLink to="/">Orders</NavLink></li>
                    <li><NavLink to="/">Stocks</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
};

export default AsideBlock;