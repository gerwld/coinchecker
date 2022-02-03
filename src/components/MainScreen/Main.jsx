import React from 'react';
import s from './Main.module.css';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';

const Main = (props) => {
    return (
        <div>
            <header className="header-content">
                <div className="header-overlay content-wrapper">
                    <img src={logo} className="header-logo" alt="logo" />
                        <nav className="main_nav">
                        <ul>
                            <li><NavLink to="/" exact className={(e) => e.isActive ? 'active_a':'' }>Main</NavLink></li>
                            <li><NavLink to="/dashboard" className={(e) => e.isActive ? 'active_a':'' }>Dashboard</NavLink></li>
                            <li><a href="#">Budget</a></li>
                            <li><a href="#">Market</a></li>
                            <li><a href="#">Nft</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={`${s.main_content} content-wrapper`}>
                <h1>Header title</h1>
                <div className={s.container_1}></div>
                <div className={s.container_1}></div>
                <div className={s.container_1}></div>
                <div className={s.container_1}></div>
                <div className={s.container_1}></div>
            </div>
        </div>
    )
}

export default Main;