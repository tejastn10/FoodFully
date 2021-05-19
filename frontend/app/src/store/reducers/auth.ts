import { createReducer } from "@reduxjs/toolkit";
import {
  loginAuthRequest,
  loginAuthSuccess,
  loginAuthError,
  logoutUser,
  registerAuthRequest,
  registerAuthSuccess,
  registerAuthError,
  clearAuthError,
} from "../actions/actions";
import { AuthState } from "../@types";
import {
  clearFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/api-helper";

let initialState: AuthState = {
  isLoading: false,
  errors: {
    results: null,
  },
  isSuccess: null,
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(loginAuthRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.isSuccess = null;
    })
    .addCase(loginAuthSuccess, (state, action) => {
      saveToLocalStorage("user", action.payload);
      saveToLocalStorage("token", action.payload.token);
      state.isLoading = false;
      state.isSuccess = true;
    })
    .addCase(loginAuthError, (state, action) => {
      clearFromLocalStorage("user");
      clearFromLocalStorage("token");
      state.isLoading = false;
      state.errors.results = action.payload;
      state.isSuccess = null;
    })
    .addCase(registerAuthRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.isSuccess = null;
    })
    .addCase(registerAuthSuccess, (state, action) => {
      saveToLocalStorage("user", action.payload);
      saveToLocalStorage("token", action.payload.token);
      state.isLoading = false;
      state.isSuccess = true;
    })
    .addCase(registerAuthError, (state, action) => {
      clearFromLocalStorage("user");
      clearFromLocalStorage("token");
      state.isLoading = false;
      state.errors.results = action.payload;
      state.isSuccess = null;
    })
    .addCase(logoutUser, (state, _action) => {
      clearFromLocalStorage("user");
      clearFromLocalStorage("token");
      state.isLoading = false;
      state.isSuccess = null;
    })
    .addCase(clearAuthError, (state, _action) => {
      state.errors.results = null;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
      state.isSuccess = null;
    });
});

export { initialState as AuthInitialState, reducer as AuthStateReducer };
