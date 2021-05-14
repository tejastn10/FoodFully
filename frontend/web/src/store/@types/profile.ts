import { Errors } from ".";
import { Donation } from "./donation";
import { Order } from "./order";

export interface User {
  _id: string;
  name: string;
  email: string;
  contact: string;
  isAdmin: boolean;
  isNgo: boolean;
  address: {
    street: string;
    city: string;
    pincode: string;
    state: string;
  };
}

export interface ProfileState {
  isLoading: boolean;
  errors: Errors;
  profile: User | null;
  history: Donation[] | Order[] | null;
}

export enum ProfileActionTypes {
  PROFILE_REQUEST = "@@user/PROFILE_REQUEST",
  PROFILE_SUCCESS = "@@user/PROFILE_SUCCESS",
  PROFILE_ERROR = "@@user/PROFILE_ERROR",
  CLEAR_PROFILE = "@@user/CLEAR_PROFILE",
  UPDATE_PROFILE_REQUEST = "@@user/UPDATE_PROFILE_REQUEST",
  UPDATE_PROFILE_SUCCESS = "@@user/UPDATE_PROFILE_SUCCESS",
  UPDATE_PROFILE_ERROR = "@@user/UPDATE_PROFILE_ERROR",
  CLEAR_PROFILE_ERROR = "@@user/CLEAR_PROFILE_ERROR",
  HISTORY_REQUEST = "@@user/HISTORY_REQUEST",
  HISTORY_SUCCESS = "@@user/HISTORY_SUCCESS",
  HISTORY_ERROR = "@@user/HISTORY_ERROR",
}
