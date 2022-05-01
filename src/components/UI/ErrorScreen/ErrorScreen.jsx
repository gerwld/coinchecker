import React from 'react'
import s from "./Error.module.css";
import {MdOutlineReportProblem} from "react-icons/md";
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

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