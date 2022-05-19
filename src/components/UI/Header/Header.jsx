import React, { useEffect, useRef, useState } from 'react';
import { Pl, Ua, Us } from 'react-flags-select';
import { NavLink } from 'react-router-dom';
import withClickOutside from '../../../hoc/withClickOutside';
import { LinkWithPending } from '../LoaderPending/LoadWithPending';
import s from './Header.module.css';

const HeaderMain = ({isAuth, logOut}) => {
  return (
    <>
      <HeaderSection isAuth={isAuth} logOut={logOut} />
      <div className={s.header_section1}>
        <div className="content-wrapper">
          <h1 className={s.header_title}>Start and Build Your Crypto Portfolio Here</h1>
          <p className={s.header_subtitle}><span>Only at CoinChecker, you can build a good portfolio and learn</span><span>best practices about cryptocurrency.</span></p>
          <LinkWithPending link="/login"><button className={s.explore}>Get started</button></LinkWithPending>

        </div>
      </div>
    </>
  );
};

export const HeaderSection = ({isAuth = false, logOut, blueMode}) => {
  const headBar = useRef(0);
  const jumpFix = useRef(0);
  const headHeight = headBar.current.clientHeight
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFixed, setFixed] = useState(false);
  const [isMenuShow, setMenu] = useState(false);

  const onMenuClick = () => {
    setMenu(!isMenuShow);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      if(scrollPosition > headHeight + 20) {
        setFixed(true);
        jumpFix.current.style = `height: ${headHeight}px`;
        headBar.current.style = `top: 0px`;

      } else if (scrollPosition < 20 ) {
        setFixed(false);
        jumpFix.current.style = `height: 0!important`;
        headBar.current.style = `top: -${headHeight + 30}px`;
      }
    }


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition, headHeight]);

  return (
    <>
    <div ref={jumpFix} className={s.header_floatfix}></div>
    <header ref={headBar} className={`${s.main_header} ${isMenuShow && s.opened} ${isFixed ? s.fixed : ''} ${blueMode ? s.blue_mode : ''}`}>
      <div className={`${s.header_overlay} content-wrapper`}>
        <div className={s.header_block_1}>
        <span className={s.header_logo}><NavLink to="/">CoinChecker</NavLink></span>
        <button onClick={onMenuClick} className={s.mobile_menu}></button>
        </div>
        <div className={s.header_nav}>
          <nav className={`${s.main_nav} ${s.main_nav__1}`} role="navigation">
            <div className={s.element}>
              <NavLink to="/" className={(e) => e.isActive ? 'active_a' : ''}><span>Main</span></NavLink>
            </div>
            <div className={s.element}>
            <LinkWithPending link="/dashboard"><span className={s.a_link}>Dashboard</span></LinkWithPending>
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
          <nav className={`${s.main_nav} ${s.main_nav__2}`} role="navigation">
            <LangSelect currLang='EN' />
            <div className={s.element_btn}>
            {isAuth 
            ? <button onClick={logOut} className={s.btn_singin}>Sign Out</button>
            : <LinkWithPending link="/login"><span className={s.btn_singin}>Sign In</span></LinkWithPending>}
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
};

const LangSelect = withClickOutside(({refE, setShow, isShow, ...props}) => {
  return (
    <div ref={refE} className={`${s.element_lang} ${isShow ? s.show_block : ''}`}>
      <button onClick={() => setShow(!isShow)} className={`${s.btn_lang} ic-dropdown`}>EN</button>
      <div className={s.lang_drop}>
        <div className={s.lang_drop_option}><Us /> English</div>
        <div className={s.lang_drop_option}><Ua /> Ukraininan</div>
        <div className={s.lang_drop_option}><Pl /> Polish</div>
      </div>
    </div>
  );
})


export default HeaderMain;
