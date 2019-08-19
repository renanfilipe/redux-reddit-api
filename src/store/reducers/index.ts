import { combineReducers } from "redux";
import selectedSubreddit from "./selectedSubreddit";

const redditApiApp = combineReducers({
  selectedSubreddit,
});

export default redditApiApp;
