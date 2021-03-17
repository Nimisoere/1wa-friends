import { combineReducers } from "redux";
import apiRequest from "../slices/requestSlice";
import notification from "../slices/notification";
import modal from "../slices/modal";

const rootReducer = combineReducers({
  notification,
  apiRequest,
  modal,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
