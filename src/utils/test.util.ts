import thunk, { ThunkDispatch } from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { AnyAction } from 'redux';
import { AppState } from '../interfaces';

export const thunkTestObject = () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore<
    AppState,
    ThunkDispatch<AppState, any, AnyAction>
  >(middlewares);
  return {
    middlewares,
    mockStore,
  };
};
