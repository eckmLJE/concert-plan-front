import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Header, Image, Icon } from "semantic-ui-react";
import moment from "moment";

class ConcertDetail extends Component {
  render() {
    return (
      <Segment>
        <Header as="h3">
          <Icon
            name="arrow alternate circle left outline"
            onClick={this.props.back}
          />
          <Header.Content>Concert Detail</Header.Content>
        </Header>
        <Image
          src={
            this.props.currentConcert.images.find(image => image.width > 600)
              .url
          }
        />
        <h4>{this.props.currentConcert.name}</h4>
        <p>Venue: {this.props.currentConcert._embedded.venues[0].name}</p>
        <p>
          Date:{" "}
          {moment(this.props.currentConcert.dates.start.localDate).format(
            "MMMM Do, YYYY"
          )}
        </p>
        <p>Time: {this.props.currentConcert.dates.start.localTime}</p>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  currentConcert: state.concerts.currentConcert
});

//   const mapDispatchToProps = dispatch => ({
//     setCurrentVenue: venueId => dispatch(setCurrentVenue(venueId))
//   });

export default connect(
  mapStateToProps,
  null
)(ConcertDetail);
