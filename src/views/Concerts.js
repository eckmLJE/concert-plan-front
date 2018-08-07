import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentVenue } from "../actions/concerts";

class Concerts extends Component {
  componentDidMount = () => {
    this.props.setCurrentVenue("KovZ917A3Y7");
  };

  render() {
    return <div>Concerts</div>;
  }
}

const mapStateToProps = state => ({
  currentVenue: state.concerts.currentVenue
});

const mapDispatchToProps = dispatch => ({
  setCurrentVenue: (venueId) => dispatch(setCurrentVenue(venueId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Concerts);
