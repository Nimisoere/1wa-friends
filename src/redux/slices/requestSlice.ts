import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KeyFetchAction, KeyFetchState } from '../../interfaces';
import { initialFetchState } from '../../interfaces/initialStates';

const apiRequest = createSlice({
  name: 'apiRequest',
  initialState: {} as KeyFetchState,
  reducers: {
    apiRequestLoading(
      state: KeyFetchState,
      action: PayloadAction<KeyFetchAction>
    ) {
      state[action.payload.key] = {
        ...state[action.payload.key],
        loading: true,
        success: false,
        request: action.payload.request || null,
      };
    },
    apiRequestSuccess(
      state: KeyFetchState,
      action: PayloadAction<KeyFetchAction>
    ) {
      state[action.payload.key] = {
        ...state[action.payload.key],
        loading: false,
        success: true,
        response: action.payload.response,
        error: null,
      };
    },
    apiRequestFailure(
      state: KeyFetchState,
      action: PayloadAction<KeyFetchAction>
    ) {
      state[action.payload.key] = {
        ...state[action.payload.key],
        loading: false,
        success: false,
        error: action.payload.error || null,
      };
    },
    apiRequestReset(
      state: KeyFetchState,
      action: PayloadAction<KeyFetchAction>
    ) {
      state[action.payload.key] = {
        ...state[action.payload.key],
        ...initialFetchState,
      };
    },
    apiRequestResetAll(
      state: KeyFetchState,
      action: PayloadAction<KeyFetchAction>
    ) {
      // eslint-disable-next-line no-param-reassign
      state = {} as KeyFetchState;
    },
    apiRequestReplaceResponse(
      state: KeyFetchState,
      action: PayloadAction<KeyFetchAction>
    ) {
      state[action.payload.key] = {
        ...state[action.payload.key],
        loading: false,
        success: true,
        response: action.payload.response,
        error: null,
      };
    },
  },
});

export const {
  apiRequestFailure,
  apiRequestLoading,
  apiRequestReplaceResponse,
  apiRequestReset,
  apiRequestResetAll,
  apiRequestSuccess,
} = apiRequest.actions;

export default apiRequest.reducer;
