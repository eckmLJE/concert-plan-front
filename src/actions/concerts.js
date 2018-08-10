import tmApiKey from "../tmApiKey";

const discoveryUrl =
  "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" +
  tmApiKey +
  "&venueId=";

export const setCurrentVenue = venueId => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_CONCERTS_REQUEST" });
    return fetch(discoveryUrl + venueId + "&sort=date,asc&page=0&size=20")
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: "SET_VENUE_CONCERTS",
          concerts: json._embedded.events
        });
        dispatch({ type: "SET_CURRENT_VENUE", venue: venueId });
      });
  };
};

export const setCurrentConcert = concert => ({
  type: "SET_CONCERT",
  concert
});
