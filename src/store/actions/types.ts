export const SET_SELECTED_SUBREDDIT = "SET_SELECTED_SUBREDDIT";
export const FRONTEND = "FRONTEND";
export const REACTJS = "REACTJS";

interface item {
  id: number;
  title: string;
}

interface Subreddit {
  [keys: string]: {
    isFetching: boolean;
    didInvalidate: boolean;
    lastUpdated: Date;
    items: item[];
  };
}

export interface AppState {
  selectedSubreddit: SubredditTypes;
  postsBySubreddit: Subreddit[];
}

interface SetSelectedSubreddit {
  type: typeof SET_SELECTED_SUBREDDIT;
  selectedSubreddit: SubredditTypes;
}

export type SelectedSubredditTypes = SetSelectedSubreddit;
export type SubredditTypes = typeof FRONTEND | typeof REACTJS;
