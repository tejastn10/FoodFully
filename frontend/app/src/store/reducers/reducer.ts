import { combineReducers } from "@reduxjs/toolkit";
import { AuthStateReducer, AuthInitialState } from "./auth";
import { UserProfileStateReducer, UserProfileInitialState } from "./user";

const reducers = {
  authState: AuthStateReducer,
  userProfile: UserProfileStateReducer,
};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};

export { AuthInitialState, UserProfileInitialState };
