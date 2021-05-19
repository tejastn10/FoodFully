import { combineReducers } from "@reduxjs/toolkit";
import { AuthStateReducer, AuthInitialState } from "./auth";
import { UserProfileStateReducer, UserProfileInitialState } from "./user";
import { NearbyStateReducer, NearbyInitialState } from "./nearby";
import { DonationStateReducer, DonationInitialState } from "./donation";
import { OrderStateReducer, OrderInitialState } from "./order";

const reducers = {
  authState: AuthStateReducer,
  userProfile: UserProfileStateReducer,
  nearby: NearbyStateReducer,
  donation: DonationStateReducer,
  order: OrderStateReducer,
};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};

export {
  AuthInitialState,
  UserProfileInitialState,
  NearbyInitialState,
  DonationInitialState,
  OrderInitialState,
};
