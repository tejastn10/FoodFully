import { CustomError } from "../../utils/api-helper";
import { Auth, AuthState, AuthActionTypes } from "./auth";
import { Profile, UserProfileState, UserProfileActionTypes } from "./user";
import { NearbyState, NearbyActionTypes } from "./nearby";

export interface Errors {
  results: CustomError | null;
}

export { AuthActionTypes, UserProfileActionTypes, NearbyActionTypes };
export type { Auth, AuthState, Profile, UserProfileState, NearbyState };
