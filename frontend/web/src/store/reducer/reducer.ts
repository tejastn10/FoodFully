import { combineReducers } from "@reduxjs/toolkit";
import { AuthStateReducer, AuthInitialState } from "./auth";

const reducers = {
  auth: AuthStateReducer,
};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};

export { AuthInitialState };
