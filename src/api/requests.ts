import { AxiosRequestConfig } from 'axios';
import { baseInstance } from '.';
import { Datum } from '../interfaces';
import { API_KEYS, API_LIBRARY as IAPI_LIBRARY } from '../interfaces/api';

export const API_LIBRARY: IAPI_LIBRARY = {
  GET_FRIENDS: {
    instance: baseInstance,
    request: {
      url: '../data/friendList.json',
      method: 'get',
    },
  },
};

const getApiUrlParams = (url: string): string[] => {
  const urlBits = url?.split('/');
  const params = urlBits?.filter((part) => part.startsWith(':'));
  return params;
};

const replaceParamsWithObject = (
  url: string,
  params: string[],
  urlParams: { [x: string]: string }
): string => {
  let apiUrl = url;
  params?.forEach((param) => {
    const paramName = param.substring(1);
    apiUrl = apiUrl?.replace(param, urlParams[paramName]);
  });
  return apiUrl;
};

export const makeRequest = async (
  api_key: API_KEYS,
  apiOptions?: Omit<AxiosRequestConfig, 'baseurl' | 'url' | 'method'>,
  urlParams?: Datum
) => {
  const api = API_LIBRARY[api_key];
  let apiUrl = api.request.url;

  if (!apiUrl) {
    throw new Error('Invalid API Url');
  }

  if (urlParams) {
    const params = getApiUrlParams(apiUrl);
    if (params.length) {
      apiUrl = replaceParamsWithObject(apiUrl, params, urlParams);
    }
  }

  if (getApiUrlParams(apiUrl).length) {
    throw new Error(`Provide values for ${getApiUrlParams(apiUrl).join(', ')}`);
  }

  try {
    const response = await api.instance.request({
      ...api.request,
      url: apiUrl,
      ...apiOptions,
    });
    return response;
  } catch (err) {
    return Promise.reject(err.response || err);
  }
};
