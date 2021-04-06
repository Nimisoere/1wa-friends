import { AxiosInstance, AxiosRequestConfig } from 'axios';

export enum API_KEYS {
  GET_FRIENDS = 'GET_FRIENDS',
}

export interface API_LIBRARY_OBJECT {
  instance: AxiosInstance;
  request: AxiosRequestConfig;
}

export type API_LIBRARY = {
  [x in API_KEYS]: API_LIBRARY_OBJECT;
};
