import React, { Component } from "react";
import { connect } from "react-redux";

import { loadUser } from "../actions/users";
import { logOutUser } from "../actions/users";

import Login from "./Login";

class Header extends Component {
  componentDidMount = () => {
    this.props.loadUser();
  };

  render() {
    return (
      <div>
        {this.props.userAuthStatus === "authenticated" ? (
          <div>
            {"User Authenticated"}{" "}
            <button onClick={this.props.logOutUser}>Log Out</button>
          </div>
        ) : (
          "Please Login"
        )}
        {this.props.userAuthStatus !== "authenticated" ? <Login /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userAuthStatus: state.users.userAuthStatus
});

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser()),
    logOutUser: () => dispatch(logOutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
