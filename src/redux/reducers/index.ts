import { combineReducers } from 'redux';
import apiRequest from '../slices/requestSlice';

const rootReducer = combineReducers({
  apiRequest,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
