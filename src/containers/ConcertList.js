import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Header, Icon } from "semantic-ui-react";

class ConcertList extends Component {
  render() {
    return (
      <Segment>
        <Header as="h3">
          <Icon
            name="arrow alternate circle left outline"
            onClick={this.props.back}
          />
          <Header.Content>Select a Concert</Header.Content>
        </Header>
        <Segment.Group>
          {this.props.currentConcerts.map(concert => (
            <Segment
              key={concert.id}
              id={concert.id}
              onClick={this.props.handleConcertSelect}
            >
              {concert.name}
            </Segment>
          ))}
        </Segment.Group>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  currentConcerts: state.concerts.currentConcerts
});

//   const mapDispatchToProps = dispatch => ({
//     setCurrentVenue: venueId => dispatch(setCurrentVenue(venueId))
//   });

export default connect(
  mapStateToProps,
  null
)(ConcertList);
