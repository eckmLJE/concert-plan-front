import React, { Component } from "react";
import { connect } from "react-redux";

import { Segment, Button, Dropdown } from "semantic-ui-react";

import { logOutUser } from "../actions/users";
import { loadUser } from "../actions/users";
import { navToHome } from "../actions/navs";
import { navToLogin } from "../actions/navs";
import { navToConcerts } from "../actions/navs";
import { navToPlans } from "../actions/navs"

class Header extends Component {
  componentDidMount = () => {
    this.props.loadUser();
  };

  render() {
    return (
      <Segment clearing>
        <Dropdown icon="bars">
          <Dropdown.Menu>
            <Dropdown.Item onClick={this.props.navToHome}>Home</Dropdown.Item>
            <Dropdown.Item onClick={this.props.navToConcerts}>
              Concerts
            </Dropdown.Item>
            <Dropdown.Item onClick={this.props.navToPlans}>Plans</Dropdown.Item>
            <Dropdown.Item>Test3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {this.props.userAuthStatus === "authenticated" ? (
          <Button
            size="mini"
            basic
            secondary
            floated="right"
            onClick={this.props.logOutUser}
          >
            Log Out
          </Button>
        ) : (
          <Button
            size="mini"
            basic
            primary
            floated="right"
            onClick={this.props.navToLogin}
          >
            Log In
          </Button>
        )}
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  userAuthStatus: state.users.userAuthStatus
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser()),
  loadUser: () => dispatch(loadUser()),
  navToHome: () => dispatch(navToHome()),
  navToLogin: () => dispatch(navToLogin()),
  navToConcerts: () => dispatch(navToConcerts()),
  navToPlans: () => dispatch(navToPlans())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
