import React, { Component } from "react";
import { connect } from "react-redux";

import { loadUser } from "../actions/users";

import Login from "./Login";

class Header extends Component {
  componentDidMount = () => {
    this.props.loadUser();
  };

  render() {
    return (
      <div>
        {this.props.userAuthStatus === "authenticated"
          ? "User Authenticated"
          : "Please Login"}
        {this.props.userAuthStatus === "failed" ? <Login /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userAuthStatus: state.users.userAuthStatus
});

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
