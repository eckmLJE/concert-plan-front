import { combineReducers } from "redux";
import concertsReducer from "./concertsReducer";

export const rootReducer = combineReducers({
  concerts: concertsReducer
});
