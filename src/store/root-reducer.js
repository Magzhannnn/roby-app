import { combineReducers } from "redux";
import { userReducer } from "./userAuth.js/user-reducer";

export const rootReducer = combineReducers({
  users: userReducer,
});
