import { combineReducers } from 'redux';
import apiRequest from '../slices/requestSlice';
import starredFriends from '../slices/stars';

const rootReducer = combineReducers({
  apiRequest,
  starredFriends,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
