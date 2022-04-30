import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import s from "./Br.module.css";

const Breadcrumbs = ({ current_ctg, links }) => {
  return (
    <div className={s.breadcrumbs}>
      {links?.map((link, i) => {
        return (
          <div key={i+link+"_br"} className={s.link}>
            {i !== 0 && <RiArrowRightSLine />}
            <NavLink to={link.to}>{link.name}</NavLink>
          </div>
        );
      })}
      <RiArrowRightSLine />
      <span>{current_ctg}</span>
    </div>
  );
};

export default Breadcrumbs;
