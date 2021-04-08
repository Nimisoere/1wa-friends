import { API_KEYS } from '../../interfaces/api';
import { apiThunk } from './api';
import {} from './interfaces/friends.interface';

import { Thunk } from './interfaces/thunks.interface';

export const thunks: Thunk = {
  GET_FRIENDS: () =>
    apiThunk({
      key: API_KEYS.GET_FRIENDS,
      request: {},
      apiOptions: {},
    }),
};
