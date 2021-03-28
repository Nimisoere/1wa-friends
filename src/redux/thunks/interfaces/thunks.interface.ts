import { API_KEYS } from '../../../interfaces/api';

export type Thunk = {
  [x in API_KEYS]: (
    ...args: any
  ) => (dispatch: React.Dispatch<any>) => Promise<void>;
};
