import { AppState, FetchState, KeyFetchState } from '.';

export const initialFetchState: FetchState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null,
};

export const initialState: AppState = {
  apiRequest: {} as KeyFetchState,
};
