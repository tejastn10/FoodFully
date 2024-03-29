import { CustomError } from "../../utils/api-helper";
import { Auth, AuthState, AuthActionTypes } from "./auth";
import { User, ProfileState, ProfileActionTypes } from "./profile";
import { NearbyState, NearbyActionTypes } from "./nearby";
import { DonationState, DonationActionTypes } from "./donation";
import { OrderState, OrderActionTypes } from "./order";
import { AdminState, AdminActionTypes } from "./admin";

export interface Errors {
  results: CustomError | null;
}

export {
  AuthActionTypes,
  ProfileActionTypes,
  NearbyActionTypes,
  DonationActionTypes,
  OrderActionTypes,
  AdminActionTypes,
};
export type {
  Auth,
  AuthState,
  User,
  ProfileState,
  NearbyState,
  DonationState,
  OrderState,
  AdminState,
};
