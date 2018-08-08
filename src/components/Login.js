import React, { Component } from "react";
import { connect } from "react-redux";

import { authenticateUser } from "../actions/users";

class Login extends Component {
  state = { email: "", password: "" };

  login = e => {
    e.preventDefault();
    let userData = {
      auth: {
        email: this.state.email,
        password: this.state.password
      }
    };
    this.props.authenticateUser(userData);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <form>
        <input
          name="email"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          placeholder="email"
        />
        <input
          name="password"
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })}
          placeholder="password"
        />
        <button onClick={this.login}>Login</button>
      </form>
    );
  }
}

// const mapStateToProps = state => ({
//   // errors: state.errors.login
// });

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: userData => dispatch(authenticateUser(userData))
    // saveUser: userData => dispatch(saveUser(userData)),
    // clearErrors: () => dispatch({ type: "CLEAR_ERRORS" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
