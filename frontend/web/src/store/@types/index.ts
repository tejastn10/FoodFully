import { CustomError } from "../../utils/api-helper";
import { Auth, AuthState, AuthActionTypes } from "./auth";
import { User, ProfileState, ProfileActionTypes } from "./profile";
import { NearbyState, NearbyActionTypes } from "./nearby";

export interface Errors {
  results: CustomError | null;
}

export { AuthActionTypes, ProfileActionTypes, NearbyActionTypes };
export type { Auth, AuthState, User, ProfileState, NearbyState };
