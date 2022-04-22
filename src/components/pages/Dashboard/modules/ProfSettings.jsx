import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dashboard.module.css";

import withClickOutside from "../../../../hoc/withClickOutside";

import { RiLogoutBoxRLine, RiSettings3Line } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";


const ProfSettings = React.memo(
  withClickOutside(({ refE, setShow, isShow, userData, logOut }) => {
    const username = userData?.username.length > 12 ? userData?.username.slice(0, 12) + "..." : userData?.username;
    const close = () => {
      setShow(!isShow);
    };
    return (
      <div className={`${s.dashboard_wrapper} ${isShow ? s.show_settings : ""}`} ref={refE}>
        <div className={s.dashboard_cuser} onClick={close}>
          <div className={s.cuser_avatar}>
            <img src="/img/user.svg" alt="User Avatar" />
          </div>
          <span className={s.cuser_name + " ic-dropdown"}>{username}</span>
        </div>
        <div className={s.cuser_settings}>
          <div className={s.drop_overlay}>
            <span className={s.drop_t}>Settings:</span>
            <ul>
              <li>
                <button>
                  <BiHelpCircle />
                  Help
                </button>
              </li>
              <li>
                <NavLink to="/dashboard/settings">
                  <RiSettings3Line />
                  Profile Settings
                </NavLink>
              </li>
              <li>
                <button onClick={logOut}>
                  <RiLogoutBoxRLine />
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  })
);

export default ProfSettings;
