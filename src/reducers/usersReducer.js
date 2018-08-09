const usersReducer = (
  state = {
    currentUser: null,
    userAuthStatus: "no user",
    userLoadingStatus: false
  },
  action
) => {
  switch (action.type) {
    case "AUTHENTICATING_USER":
      return {
        ...state,
        currentUser: null,
        userAuthStatus: "authenticating"
      };
    case "USER_AUTHENTICATED":
      return { ...state, userAuthStatus: "authenticated" };
    case "USER_AUTHENTICATION_FAILED":
      return {
        ...state,
        currentUser: null,
        userAuthStatus: "failed"
      };
    case "FETCHING_USER":
      return {
        ...state,
        userLoadingStatus: true
      };
    case "FETCHED_USER":
      return {
        ...state,
        currentUser: {
          id: action.user.data.id,
          username: action.user.data.attributes.username,
          email: action.user.data.attributes.email
        },
        userLoadingStatus: false,
        userAuthStatus: "authenticated"
      };
    case "USER_LOGIN_FAILED":
      return {
        ...state,
        currentUser: null,
        userAuthStatus: "failed",
        userLoadingStatus: false
      };
    case "LOG_OUT_USER":
      return {
        ...state,
        currentUser: null,
        userAuthStatus: "no user",
        userLoadingStatus: false
      };
    default:
      return state;
  }
};

export default usersReducer;
