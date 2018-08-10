import { push } from "connected-react-router";

export const navToLogin = () => dispatch => {
  dispatch(push("/login"));
};

export const navToConcerts = () => dispatch => {
  dispatch(push("/concerts"));
};

export const navToPlans = () => dispatch => {
  dispatch(push("/plans"));
};

export const navToHome = () => dispatch => {
  dispatch(push("/"));
};
