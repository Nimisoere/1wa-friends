import { Dispatch } from 'react';
import { AxiosRequestConfig } from 'axios';
import { API_KEYS } from '../../interfaces/api';
import {
  apiRequestLoading,
  apiRequestFailure,
  apiRequestReset,
  apiRequestSuccess,
} from '../slices/requestSlice';
import { show as showNotification } from '../slices/notification';
import { makeRequest } from '../../api/requests';
import { Datum } from '../../interfaces';

export interface ThunkConfig<Req> {
  key: API_KEYS;
  request: Req;
  apiOptions: Omit<AxiosRequestConfig, 'baseurl' | 'url' | 'method'>;
  urlParams?: Datum;
  showSuccessAlert?: boolean;
  successAlertMessage?: string;
  showErrorAlert?: boolean;
  errorAlertMessage?: string;
  dispatchOnSuccess?: (req: Req, res: any) => void;
  dispatchOnError?: (error: any) => void;
  onSuccessCallback?: (req: Req, res: any) => void;
  onErrorCallback?: (error: any) => void;
}

export const apiThunk = <Req>({
  key,
  request,
  apiOptions,
  urlParams,
  showSuccessAlert = true,
  successAlertMessage,
  showErrorAlert = true,
  errorAlertMessage,
  dispatchOnSuccess,
  dispatchOnError,
  onSuccessCallback,
  onErrorCallback,
}: ThunkConfig<Req>) => async (dispatch: Dispatch<any>) => {
  dispatch(apiRequestLoading({ key, request: (request as unknown) as Datum }));
  try {
    const response = await makeRequest(key, apiOptions, urlParams);
    if ([200, 201, 204].includes(response.status)) {
      dispatch(apiRequestSuccess({ key, response: response.data as any }));
      if (showSuccessAlert) {
        dispatch(
          showNotification({
            alertType: 'success',
            message: successAlertMessage || 'Operation successful',
          })
        );
      }
      if (dispatchOnSuccess) {
        dispatchOnSuccess(request, response);
      }
      if (onSuccessCallback) {
        onSuccessCallback(request, response);
      }
    }
  } catch (error: any) {
    dispatch(apiRequestFailure({ key, error: error.data }));
    if (showErrorAlert) {
      dispatch(
        showNotification({
          alertType: 'error',
          message: errorAlertMessage || error?.data?.ShortDescription,
        })
      );
    }
    if (dispatchOnError) {
      dispatchOnError(error);
    }
    if (onErrorCallback) {
      onErrorCallback(error);
    }
  }
};

export const resetApiThunk = (key: API_KEYS) => apiRequestReset({ key });
