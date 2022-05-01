import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { MdOutlineReportProblem } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import s from "./Error.module.css";

const ErrorScreen = ({error, children, withIcon}) => {
  const history = useNavigate();
  const goBack = () => {
    history(-1);
  }
  return (
   <div className="dash_content_loader dash_content_error"><span>{error}</span>
   {children}
   {withIcon && <div className={s.error_icon}><MdOutlineReportProblem/></div>}
   <div onClick={goBack} className={s.btn_back}><BsArrowLeft/>Go Back</div>
   </div>
  )
}

export default ErrorScreen;