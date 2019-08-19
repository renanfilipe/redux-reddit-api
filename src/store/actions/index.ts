import {
  SelectedSubredditTypes,
  SET_SELECTED_SUBREDDIT,
  SubredditTypes,
} from "./types";

export const setSelectedSubreddit = (
  selectedSubreddit: SubredditTypes,
): SelectedSubredditTypes => ({
  type: SET_SELECTED_SUBREDDIT,
  selectedSubreddit,
});
