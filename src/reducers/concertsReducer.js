const concertsReducer = (
  state = {
    currentVenue: null,
    currentConcerts: [],
    concertLoadingStatus: false
  },
  action
) => {
  switch (action.type) {
    case "SET_CURRENT_VENUE":
      return {
        ...state,
        currentVenue: action.venue
      };
    case "START_FETCHING_CONCERTS_REQUEST":
      return { ...state, concertLoadingStatus: true };
    case "SET_VENUE_CONCERTS":
      return {
        ...state,
        currentConcerts: action.concerts,
        concertLoadingStatus: false
      };
    default:
      return state;
  }
};

export default concertsReducer;
