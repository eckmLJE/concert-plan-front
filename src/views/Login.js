import React, { Component } from "react";
import { connect } from "react-redux";

import { authenticateUser } from "../actions/users"

class Login extends Component {
  state = { email: "", password: "" };

  login = e => {
    e.preventDefault();
    let params = {
      auth: {
        email: this.state.email,
        password: this.state.password
      }
    };
    let url = "http://localhost:3000/api/v1/user_token";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .then(console.log);
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

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: userData => dispatch(authenticateUser(userData))
    // saveUser: userData => dispatch(saveUser(userData)),
    // clearErrors: () => dispatch({ type: "CLEAR_ERRORS" })
  };
};

const mapStateToProps = state => {
  return {
    errors: state.errors.login
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
