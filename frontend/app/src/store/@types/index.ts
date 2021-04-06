import { CustomError } from "../../utils/api-helper";
import { Auth, AuthState, AuthActionTypes } from "./auth";
import { Profile, UserProfileState, UserProfileActionTypes } from "./user";

export interface Errors {
  results: CustomError | null;
}

export { AuthActionTypes, UserProfileActionTypes };
export type { Auth, AuthState, Profile, UserProfileState };
