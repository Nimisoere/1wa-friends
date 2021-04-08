import { Dispatch } from 'react';
import { API_KEYS } from '../../interfaces/api';
import {
  apiRequestLoading,
  apiRequestFailure,
  apiRequestReset,
  apiRequestSuccess,
  apiRequestReplaceResponse,
} from '../slices/requestSlice';
import { makeRequest } from '../../api/requests';
import { Datum } from '../../interfaces';

export interface ThunkConfig<Req> {
  key: API_KEYS;
  request: Req;
  apiOptions: Partial<Request>;
  urlParams?: Datum;
}

export const apiThunk = <Req>({
  key,
  request,
  apiOptions,
  urlParams,
}: ThunkConfig<Req>) => async (dispatch: Dispatch<any>) => {
  dispatch(apiRequestLoading({ key, request: (request as unknown) as Datum }));
  try {
    const response = await makeRequest(key, apiOptions, urlParams);
    if ([200, 201, 204].includes(response.status)) {
      const data = await response.json();
      dispatch(apiRequestSuccess({ key, response: data as any }));
    }
  } catch (error: any) {
    dispatch(apiRequestFailure({ key, error: error.data }));
  }
};

export const resetApiThunk = (key: API_KEYS) => apiRequestReset({ key });

export const updateApiResponse = (key: API_KEYS, response: any) =>
  apiRequestReplaceResponse({
    key,
    response,
  });
