import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Segment,
  Header,
  Icon,
  Container
} from "semantic-ui-react";
import moment from "moment";

class PlanDetail extends Component {
  render() {
    return (
      <Container>
        <Segment>
          <Header as="h3">
            <Icon
              name="arrow alternate circle left outline"
              onClick={this.props.back}
            />
            <Header.Content>Plan Detail</Header.Content>
          </Header>
          <h4>{this.props.currentPlan.attributes.name}</h4>
          <p>Venue: {this.props.currentPlan.attributes.venue}</p>
          <p>
            Date:{" "}
            {moment(this.props.currentPlan.attributes.datetime).format("MMMM Do, YYYY")}
          </p>
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentPlan: state.plans.currentPlan
});

// const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  null
)(PlanDetail);
