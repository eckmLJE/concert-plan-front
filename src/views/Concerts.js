import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentVenue } from "../actions/concerts";
import { setCurrentConcert } from "../actions/concerts";

import { Container } from "semantic-ui-react";

import VenueList from "../containers/VenueList";
import ConcertList from "../containers/ConcertList";
import ConcertDetail from "../components/ConcertDetail";

class Concerts extends Component {
  state = { viewToggle: "venue" };

  componentDidMount = () => {
    // this.props.setCurrentVenue("");
  };

  handleVenueSelect = e => {
    this.setState({ viewToggle: "concert" });
    this.props.setCurrentVenue(e.target.id);
  };

  handleConcertSelect = e => {
    this.setState({ viewToggle: "detail" });
    const concert = this.props.currentConcerts.find(
      concert => concert.id === e.target.id
    );
    this.props.setCurrentConcert(concert);
  };

  handleConcertsBack = () => {
    this.setState({ viewToggle: "venue" });
  };

  handleDetailBack = () => {
    this.setState({ viewToggle: "concert" });
  };

  renderSwitch = () => {
    switch (this.state.viewToggle) {
      case "venue":
        return <VenueList handleVenueSelect={this.handleVenueSelect} />;
      case "concert":
        return (
          <ConcertList
            handleConcertSelect={this.handleConcertSelect}
            back={this.handleConcertsBack}
          />
        );
      case "detail":
        return <ConcertDetail back={this.handleDetailBack} />;
      default:
        return <VenueList handleVenueSelect={this.handleVenueSelect} />;
    }
  };

  render() {
    return <Container>{this.renderSwitch()}</Container>;
  }
}

const mapStateToProps = state => ({
  currentVenue: state.concerts.currentVenue,
  currentConcerts: state.concerts.currentConcerts
});

const mapDispatchToProps = dispatch => ({
  setCurrentVenue: venueId => dispatch(setCurrentVenue(venueId)),
  setCurrentConcert: concert => dispatch(setCurrentConcert(concert))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Concerts);
