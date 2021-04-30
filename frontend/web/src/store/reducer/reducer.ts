import { combineReducers } from "@reduxjs/toolkit";
import { AuthStateReducer, AuthInitialState } from "./auth";
import { NearbyStateReducer, NearbyInitialState } from "./nearby";

const reducers = {
  auth: AuthStateReducer,
  nearby: NearbyStateReducer,
};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};

export { AuthInitialState, NearbyInitialState };
