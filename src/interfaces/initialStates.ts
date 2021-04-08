import { AppState, FetchState, KeyFetchState, StarredState } from '.';

export const initialFetchState: FetchState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null,
};

export const initialState: AppState = {
  apiRequest: {} as KeyFetchState,
  starredFriends: { starred: [] },
};

export const initialStarred: StarredState = {
  starred: [],
};
