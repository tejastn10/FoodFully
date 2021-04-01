import { CustomError } from "../../utlis/api-helper";
import { Auth, AuthState, AuthActionTypes } from "./auth";

export interface Errors {
  results: CustomError | null;
}

export { AuthActionTypes };
export type { Auth, AuthState };
