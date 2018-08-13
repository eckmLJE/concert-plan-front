import { combineReducers } from "redux";
import concertsReducer from "./concertsReducer";
import usersReducer from "./usersReducer";
import plansReducer from "./plansReducer";

export const rootReducer = combineReducers({
  concerts: concertsReducer,
  users: usersReducer,
  plans: plansReducer
});
