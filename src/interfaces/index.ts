import { API_KEYS } from './api';

export interface AppState {
  apiRequest: KeyFetchState;
}

export type KeyFetchState = {
  [x in API_KEYS]?: FetchState;
};

export interface KeyFetchAction {
  key: API_KEYS;
  request?: Datum | null;
  response?: Datum | null;
  error?: Datum | null;
}

export interface FetchState {
  loading: boolean;
  success: boolean;
  request?: Datum | null;
  response?: Datum | null;
  error?: Datum | null;
}

export interface Datum {
  [i: number]: never | boolean;
  [k: string]: any | boolean;
}

export interface FetchAction {
  type: string;
  request?: Datum | null;
  response?: Data | Datum | null;
  error?: Datum | null;
}

export type Data = Datum[];
