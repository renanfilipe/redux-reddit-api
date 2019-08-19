import {
  SET_SELECTED_SUBREDDIT,
  SelectedSubredditTypes,
  FRONTEND,
  SubredditTypes,
} from "../actions/types";

const selectedSubreddit = (
  state: SubredditTypes = FRONTEND,
  action: SelectedSubredditTypes,
): SubredditTypes => {
  switch (action.type) {
    case SET_SELECTED_SUBREDDIT:
      return action.selectedSubreddit;
    default:
      return state;
  }
};

export default selectedSubreddit;
