import React from 'react'
import s from "./Error.module.css";
import {MdOutlineReportProblem} from "react-icons/md";

const ErrorScreen = ({error, children, withIcon}) => {
  return (
   <div className="dash_content_loader dash_content_error"><span>{error}</span>
   {children}
   {withIcon && <div className={s.error_icon}><MdOutlineReportProblem/></div>}
   </div>
  )
}

export default ErrorScreen;