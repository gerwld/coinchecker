import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import withRouter from "../../../hoc/withRouter";
import { userLogOut } from "../../../redux/auth-reducer";
import { getCoinOutput } from "../../../redux/dashboard-reducer";
import Dashboard from "./Dashboard";

export function DashContainer({getCoinOutput, userLogOut, ...props}) {
  let navigate = useNavigate();
  useEffect(() => {
    getCoinOutput();
  }, [])

  let logOut = () => {
    setTimeout(() => {
      navigate('/');
      userLogOut();
    }, 500);
  };

  return <Dashboard last={props.last_added} userData={props.userData} logOut={logOut} />;
}

let mapStateToProps = (state) => {
  return {
    userData: state.auth.authUser,
    last_added: state.dashboard.last_added,
  };
};

export default compose(connect(mapStateToProps, { getCoinOutput, userLogOut }), withAuthRedirect)(DashContainer);
