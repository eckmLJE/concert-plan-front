import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Segment,
  Header,
  Image,
  Icon,
  Button,
  Container
} from "semantic-ui-react";
import moment from "moment";

import { postPlan } from "../actions/plans";

class ConcertDetail extends Component {
  state = { concertCreated: false };

  handleSubmit = () => {
    this.props.postPlan({
      plan: {
        name: this.props.currentConcert.name,
        venue: this.props.currentConcert._embedded.venues[0].name,
        datetime: this.props.currentConcert.dates.start.localDate
      }
    });
    this.setState({
      concertCreated: true
    });
  };

  render() {
    return (
      <Container>
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
        {this.state.concertCreated ? (
          <Header as="h4">
            Plan Created! Find it in <em>Plans</em>
          </Header>
        ) : (
          <Button fluid primary onClick={this.handleSubmit}>
            Start a Plan
          </Button>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentConcert: state.concerts.currentConcert
});

const mapDispatchToProps = dispatch => ({
  postPlan: plan => dispatch(postPlan(plan))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConcertDetail);
