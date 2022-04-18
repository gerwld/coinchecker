import React from "react";
import s from "./Features.module.css";
import { NavLink } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

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
          <div className={s.icon}>icon</div>
          <NavLink to="/aboba">
            See Explained <RiArrowRightLine />
          </NavLink>
        </div>
        <div className={s.i_block}>
          <h3>Manage Portfolio</h3>
          <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
          <div className={s.icon}>icon</div>
          <NavLink to="/aboba">
            See Explained <RiArrowRightLine />
          </NavLink>
        </div>
        <div className={s.i_block}>
          <h3>Manage Portfolio</h3>
          <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
          <div className={s.icon}>icon</div>
          <NavLink to="/aboba">
            See Explained <RiArrowRightLine />
          </NavLink>
        </div>
        <div className={s.i_block}>
          <h3>Manage Portfolio</h3>
          <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
          <div className={s.icon}>icon</div>
          <NavLink to="/aboba">
            See Explained <RiArrowRightLine />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Features;
