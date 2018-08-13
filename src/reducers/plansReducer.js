const plansReducer = (
  state = {
    availablePlans: [],
    currentPlan: {},
    planPostingStatus: false,
    plansLoadingStatus: false
  },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_PLANS_REQUEST":
      return {
        ...state,
        plansLoadingStatus: true
      };
    case "SET_AVAILABLE_PLANS":
      return {
        ...state,
        availablePlans: action.plans
      };
    case "START_POSTING_PLAN":
      return {
        ...state,
        planPostingStatus: true
      };
    case "PLAN_POSTED":
      return {
        ...state,
        availablePlans: [...state.availablePlans, action.plan],
        concertLoadingStatus: false
      };
    case "PLAN_POST_FAILED":
      return {
        ...state,
        concertLoadingStatus: false
      };
    case "SET_CURRENT_PLAN":
      return {
        ...state,
        currentPlan: action.plan
      };
    default:
      return state;
  }
};

export default plansReducer;
