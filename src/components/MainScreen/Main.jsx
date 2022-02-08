import React from 'react';
import s from './Main.module.css';
import { NavLink } from 'react-router-dom';

const Main = (props) => {
    return (
        <div>
            <header className={s.main_header}>
                <div className={`${s.header_overlay} content-wrapper`}>
                    <span className={s.header_logo}>CoinChecker</span>
                        <nav className={s.main_nav} role="navigation">
                            <button className={s.mobile_menu}>☰ Menu</button>
                            <div className={s.element}>
                                <NavLink to="/" className={(e) => e.isActive ? 'active_a':'' }><span>Main</span></NavLink>
                            </div>
                            <div className={s.element}>
                                <NavLink to="/dashboard" className={(e) => e.isActive ? 'active_a':'' }><span>Dashboard</span></NavLink>
                            </div>
                            <div className={s.element}>
                                <NavLink to="/" className={(e) => e.isActive ? 'active_a':'' }><span>Budget</span></NavLink>
                            </div>
                            <div className={s.element}>
                                <NavLink to="/" className={(e) => e.isActive ? 'active_a':'' }><span>Market</span></NavLink>
                            </div>
                            <div className={s.element_btn}>
                                <NavLink to="/login" className={(e) => e.isActive ? 'active_a':'' }><span>Sign In</span></NavLink>
                            </div>
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