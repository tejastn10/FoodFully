import { combineReducers } from "@reduxjs/toolkit";
import { AuthStateReducer, AuthInitialState } from "./auth";
import { NearbyStateReducer, NearbyInitialState } from "./nearby";
import { ProfileStateReducer, ProfileInitialState } from "./profile";
import { DonationStateReducer, DonationInitialState } from "./donation";
import { OrderStateReducer, OrderInitialState } from "./order";

const reducers = {
  auth: AuthStateReducer,
  nearby: NearbyStateReducer,
  profile: ProfileStateReducer,
  donation: DonationStateReducer,
  order: OrderStateReducer,
};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};

export {
  AuthInitialState,
  NearbyInitialState,
  ProfileInitialState,
  DonationInitialState,
  OrderInitialState,
};
