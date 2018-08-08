import { combineReducers } from "redux";
import concertsReducer from "./concertsReducer";
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
  concerts: concertsReducer,
  users: usersReducer
});
