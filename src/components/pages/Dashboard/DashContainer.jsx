import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { userLogOut } from "../../../redux/reducers/auth-reducer";
import Dashboard from "./Dashboard";

export function DashContainer({ getCoinOutput, userLogOut, ...props }) {
  const navigate = useNavigate();

  const logOut = () => {
    setTimeout(() => {
      navigate('/');
      userLogOut();
    }, 500);
  };

  return <Dashboard block_last={props.last_added} 
                    userData={props.userData} 
                    logOut={logOut} 
          />;
}

let mapStateToProps = (state) => {
  return {
    userData: state.auth.authUser,
    last_added: state.dashboard.last_added,
  };
};

export default compose(connect(mapStateToProps, { userLogOut }), withAuthRedirect)(DashContainer);
