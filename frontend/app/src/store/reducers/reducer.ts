import { combineReducers } from "@reduxjs/toolkit";
import { AuthStateReducer, AuthInitialState } from "./auth";
import { UserProfileStateReducer, UserProfileInitialState } from "./user";
import { NearbyStateReducer, NearbyInitialState } from "./nearby";

const reducers = {
  authState: AuthStateReducer,
  userProfile: UserProfileStateReducer,
  nearby: NearbyStateReducer,
};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};

export { AuthInitialState, UserProfileInitialState, NearbyInitialState };
