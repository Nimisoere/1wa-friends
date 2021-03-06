import { Datum } from '../interfaces';
import { API_KEYS, API_LIBRARY as IAPI_LIBRARY } from '../interfaces/api';

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

export const API_LIBRARY: IAPI_LIBRARY = {
  GET_FRIENDS: {
    url: `${process.env.PUBLIC_URL}/data/friendList.json`,
    options: {
      method: 'GET',
    },
  },
};

export const makeRequest = async (
  api_key: API_KEYS,
  urlParams?: Datum,
  apiOptions?: Partial<Request>
): Promise<Response> => {
  const api = API_LIBRARY[api_key];
  let apiUrl = api.url;

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
    const response = await fetch(apiUrl, {
      method: api.options.method,
      ...apiOptions,
    });
    return response;
  } catch (err) {
    return Promise.reject(err.response || err);
  }
};
