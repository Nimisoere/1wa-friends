import { AppState, FetchState } from '../../interfaces';
import { API_KEYS } from '../../interfaces/api';
import { initialFetchState } from '../../interfaces/initialStates';

export const getApiState = (state: AppState, key: API_KEYS): FetchState =>
  state.apiRequest[key] || initialFetchState;
