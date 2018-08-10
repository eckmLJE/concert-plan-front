import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Header } from "semantic-ui-react";

import { setCurrentVenue } from "../actions/concerts";

const venues = [
  { name: "Rock and Roll Hotel", id: "KovZpZAEk7aA" },
  { name: "930 Club", id: "KovZpZA7knFA" },
  { name: "The Anthem", id: "KovZ917A3Y7" },
  { name: "Echo Stage", id: "KovZpZAadt7A" },
  { name: "Black Cat", id: "KovZpZA1k1IA" }
];

class VenueList extends Component {
  render() {
    return (
      <Segment>
        <Header as="h3">Select Venue</Header>
        <Segment.Group>
          {venues.map(venue => (
            <Segment
              key={venue.id}
              id={venue.id}
              onClick={this.props.handleVenueSelect}
            >
              {venue.name}
            </Segment>
          ))}
        </Segment.Group>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  currentVenue: state.concerts.currentVenue
});

const mapDispatchToProps = dispatch => ({
  setCurrentVenue: venueId => dispatch(setCurrentVenue(venueId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VenueList);
