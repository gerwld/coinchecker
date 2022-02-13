import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import withRouter from "../../../hoc/withRouter";
import { userLogOut } from "../../../redux/auth-reducer";
import { getCoinOutput } from "../../../redux/dashboard-reducer";
import Dashboard from "./Dashboard";

class DashContainer extends React.Component {
  componentDidMount() {
    this.props.getCoinOutput();
  }

  logOut = () => {
    setTimeout(() => {
      this.props.router.navigate("/");
      localStorage.removeItem('session');
      this.props.userLogOut();
    }, 500);
  };

  render() {
    return <Dashboard last={this.props.last_added} userData={this.props.userData} logOut={this.logOut} />;
  }
}

let mapStateToProps = (state) => {
  return {
    userData: state.auth.authUser,
    last_added: state.dashboard.last_added,
  };
};

export default compose(connect(mapStateToProps, { getCoinOutput, userLogOut }), withAuthRedirect, withRouter)(DashContainer);
