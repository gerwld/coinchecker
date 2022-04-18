import React from "react";
import s from "./Features.module.css";
import { NavLink } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import { IoBriefcaseOutline, IoShieldCheckmarkOutline, IoLibraryOutline } from "react-icons/io5";
import { BiBitcoin } from "react-icons/bi";

const Features = () => {
  return (
    <div className={s.content}>
      <h2 className={s.title}>CoinChecker Amazing Features</h2>
      <span className={s.subtitle}>
        Explore sensational features to prepare your best investment in cryptocurrency
      </span>

      <div className={s.i_blocks}>
        <div className={s.i_block}>
          <h3>Manage Portfolio</h3>
          <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
          <div className={s.icon}><IoBriefcaseOutline/></div>
          <NavLink to="#explain">
            See Explained <RiArrowRightLine />
          </NavLink>
        </div>
        <div className={s.i_block}>
          <h3>Protected Securely</h3>
          <p>All cash balances are covered by SOME insurance, up to a maximum of $0,250,000.</p>
          <div className={s.icon}><IoShieldCheckmarkOutline/></div>
          <NavLink to="#explain">
            See Explained <RiArrowRightLine />
          </NavLink>
        </div>
        <div className={s.i_block}>
          <h3>Cryptocurrency Variety</h3>
          <p>Supports a variety of the most popular digital currencies and always uptodate.</p>
          <div className={`${s.icon} ${s.icon_btc}`}><BiBitcoin/></div>
          <NavLink to="#explain">
            See Explained <RiArrowRightLine />
          </NavLink>
        </div>
        <div className={s.i_block}>
          <h3>Learn Best Practice</h3>
          <p>Easy to know how to cryptocurrency works and friendly to newbie.</p>
          <div className={s.icon}><IoLibraryOutline/></div>
          <NavLink to="#explain">
            See Explained <RiArrowRightLine />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Features;
