import React, { useRef, useState } from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import useOutsideClickHide from '../../../helpers/hideOutsideClick';
import { Pl, Ua, Us } from 'react-flags-select';

const HeaderMain = (props) => {
    return (
        <>
            <header className={s.main_header}>
                <div className={`${s.header_overlay} content-wrapper`}>
                    <span className={s.header_logo}>CoinChecker</span>
                    <nav className={s.main_nav} role="navigation">
                        <button className={s.mobile_menu}>☰ Menu</button>
                        <div className={s.element}>
                            <NavLink to="/" className={(e) => e.isActive ? 'active_a' : ''}><span>Main</span></NavLink>
                        </div>
                        <div className={s.element}>
                            <NavLink to="/dashboard" className={(e) => e.isActive ? 'active_a' : ''}><span>Dashboard</span></NavLink>
                        </div>
                        <div className={s.element}>
                            <NavLink to="/" className={(e) => e.isActive ? 'active_a' : ''}><span>Budget</span></NavLink>
                        </div>
                        <div className={s.element}>
                            <NavLink to="/" className={(e) => e.isActive ? 'active_a' : ''}><span>Market</span></NavLink>
                        </div>
                        <div className={s.element}>
                            <NavLink to="/" className={(e) => e.isActive ? 'active_a' : ''}><span>About</span></NavLink>
                        </div>
                    </nav>
                    <nav className={s.main_nav} role="navigation">
                        <LangSelect currLang='EN' />
                        <div className={s.element_btn}>
                            <NavLink to="/login" className={(e) => e.isActive ? 'active_a' : ''}><span>Sign In</span></NavLink>
                        </div>
                    </nav>
                </div>
            </header>
            <div className={s.header_section1}>
                <div className="content-wrapper">
                    <h1 className={s.header_title}>Start and Build Your Crypto Portfolio Here</h1>
                    <p className={s.header_subtitle}><span>Only at CoinChecker, you can build a good portfolio and learn</span><span>best practices about cryptocurrency.</span></p>
                    <Link to="#about_us" className={s.explore}>Get started</Link>
                </div>
            </div>
        </>
    )
}

const LangSelect = (props) => {
    const [isShow, set] = useState(false);
    //hide results
    const e = useRef(null);
    useOutsideClickHide(e, set, null, true);

    return (
        <div ref={e} className={`${s.element_lang} ${isShow ? s.show_block : ''}`}>
            <button onMouseOver={() => set(true)} className={`${s.btn_lang} ic-dropdown`}>EN</button>
            <div className={s.lang_drop}>
                <div className={s.lang_drop_option}><Us /> English</div>
                <div className={s.lang_drop_option}><Ua /> Ukraininan</div>
                <div className={s.lang_drop_option}><Pl /> Polish</div>
            </div>
        </div>
    )
}




export default HeaderMain;