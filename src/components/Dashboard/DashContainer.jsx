import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCoinOutput } from "../../redux/dashboard-reducer";
import Dashboard from "./Dashboard";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { userLogOut } from "../../redux/auth-reducer";
import withRouter from "../../hoc/withRouter";

class DashContainer extends React.Component {
  componentDidMount() {
    this.props.getCoinOutput();
  }

  logOut = () => {
    setTimeout(() => {
      this.props.router.navigate("/");
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
