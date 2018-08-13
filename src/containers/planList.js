import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Segment } from "semantic-ui-react";

class PlanList extends Component {
  render() {
    return (
      <Segment>
        <Header as="h3">
          <Header.Content>Select a Plan</Header.Content>
        </Header>
        <Segment.Group>
          {this.props.availablePlans.map(plan => (
            <Segment
              key={plan.id}
              id={plan.id}
                onClick={this.props.handlePlanSelect}
            >
              <Header as="h4">{plan.attributes.name}</Header>
              <p>{plan.attributes.venue}</p>
            </Segment>
          ))}
        </Segment.Group>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  availablePlans: state.plans.availablePlans
});

//   const mapDispatchToProps = dispatch => ({
//     setCurrentVenue: venueId => dispatch(setCurrentVenue(venueId))
//   });

export default connect(
  mapStateToProps,
  null
)(PlanList);
