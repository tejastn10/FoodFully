import { combineReducers } from "@reduxjs/toolkit";
import { AuthStateReducer, AuthInitialState } from "./auth";
import { NearbyStateReducer, NearbyInitialState } from "./nearby";
import { ProfileStateReducer, ProfileInitialState } from "./profile";

const reducers = {
  auth: AuthStateReducer,
  nearby: NearbyStateReducer,
  profile: ProfileStateReducer,
};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};

export { AuthInitialState, NearbyInitialState, ProfileInitialState };
