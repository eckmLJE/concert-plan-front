import { token } from "./index";
const plansUrl = "http://localhost:3000/api/v1/plans";

export const setAvailablePlans = () => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_PLANS_REQUEST" });
    return fetch(plansUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: "SET_AVAILABLE_PLANS",
          plans: json.data
        });
      });
  };
};

export const setCurrentPlan = plan => ({
  type: "SET_CURRENT_PLAN",
  plan
})

export const postPlan = plan => {
  return dispatch => {
    dispatch({ type: "START_POSTING_PLAN" });
    return fetch(plansUrl, {
      method: "POST",
      body: JSON.stringify(plan),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`
      }
    }).then(res => {
      if (res.status === 202) {
        dispatch({ type: "PLAN_POSTED", plan: res.json() });
      } else {
        res.json().then(response => {
          console.log(response);
          dispatch({ type: "PLAN_POST_FAILED" });
        });
      }
    });
  };
};
