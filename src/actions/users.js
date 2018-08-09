import { push } from "connected-react-router";
import { token, url } from "./index";

// functions

const postUserAuthentication = userData => {
  return fetch(`${url}/user_token`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userData)
  });
};

const postUser = userData => {
  return fetch(`${url}/users`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      user: userData
    })
  });
};

const getUser = () => {
  return fetch(`${url}/user`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token()}`
    }
  });
};

// actions

export const logOutUser = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({ type: "LOG_OUT_USER" });
  dispatch(push("/home"));
};

export const loadUser = () => dispatch => {
  if (token()) {
    dispatch({ type: "FETCHING_USER" });
    getUser().then(resp => {
      if (resp.status === 200) {
        resp.json().then(user => {
          dispatch({ type: "FETCHED_USER", user });
          dispatch(push("/home"));
        });
      } else {
        dispatch({ type: "USER_LOGIN_FAILED" });
      }
    });
  }
};

export const authenticateUser = userData => dispatch => {
  dispatch({ type: "AUTHENTICATING_USER" });
  postUserAuthentication(userData).then(res => {
    if (res.status === 201) {
      res.json().then(token => {
        localStorage.setItem("token", token.jwt);
        dispatch({ type: "USER_AUTHENTICATED" });
        dispatch(loadUser());
      });
    } else {
      dispatch({ type: "USER_AUTHENTICATION_FAILED" });
    }
  });
};

export const saveUser = userData => dispatch => {
  postUser(userData).then(res => {
    if (res.status === 202) {
      dispatch({ type: "USER_POSTED" });
      dispatch(authenticateUser(userData));
    } else {
      res.json().then(response => {
        console.log(response);
        // let errors = response.errors.join(" ");
        // console.log(errors);
        // dispatch({ type: "USER_POST_FAILED", errors });
      });
    }
  });
};
