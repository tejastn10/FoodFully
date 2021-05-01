import { Errors, User } from ".";

export interface NearbyState {
  isLoading: boolean;
  errors: Errors;
  nearbyUsers: User[] | null;
}

export enum NearbyActionTypes {
  NEARBY_NGO_REQUEST = "@@nearby/NEARBY_NGO_REQUEST",
  NEARBY_NGO_SUCCESS = "@@nearby/NEARBY_NGO_SUCCESS",
  NEARBY_NGO_ERROR = "@@nearby/NEARBY_NGO_ERROR",
  NEARBY_HOTEL_REQUEST = "@@nearby/NEARBY_HOTEL_REQUEST",
  NEARBY_HOTEL_SUCCESS = "@@nearby/NEARBY_HOTEL_SUCCESS",
  NEARBY_HOTEL_ERROR = "@@nearby/NEARBY_HOTEL_ERROR",
  CLEAR_NEARBY = "@@nearby/CLEAR_NEARBY",
}
