import React, { Component } from "react";

const baseUrl = "http://localhost:3000/api/v1";

class User extends Component {
  state = { user: null };

  componentDidMount = () => {
    let token = localStorage.getItem("token");
    fetch(`${baseUrl}/user`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ user: json });
      });
  };

  render() {
    return (
      <div>
        {this.state.user ? (
          <div>
            <h1>{this.state.user.username}</h1>
            <p>{this.state.user.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default User;
