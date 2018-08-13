import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";

import { setAvailablePlans } from "../actions/plans";
import { setCurrentPlan } from "../actions/plans";

import PlanList from "../containers/planList";
import PlanDetail from "../components/planDetail";

class Plans extends Component {
  state = { viewToggle: "plans" };

  componentDidMount = () => {
    this.props.setAvailablePlans();
  };

  handleDetailBack = () => {
    this.setState({ viewToggle: "plans" });
  };

  handlePlanSelect = e => {
    console.log(e.target.id)
    // const plan = this.props.availablePlans.find(
    //   plan => plan.id === e.target.id
    // );
    // this.props.setCurrentPlan(plan);
    // this.setState({ viewToggle: "detail" });
  };

  render() {
    return (
      <Container>
        {this.state.viewToggle === "plans" ? (
          this.props.availablePlans ? (
            <PlanList handlePlanSelect={this.handlePlanSelect} />
          ) : (
            <div>Loading Plans...</div>
          )
        ) : (
          <PlanDetail back={this.handleDetailBack} />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  availablePlans: state.plans.availablePlans
});

const mapDispatchToProps = dispatch => ({
  setAvailablePlans: () => dispatch(setAvailablePlans()),
  setCurrentPlan: plan => dispatch(setCurrentPlan(plan))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plans);
