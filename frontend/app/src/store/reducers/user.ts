import { createReducer } from "@reduxjs/toolkit";
import {
  getUserProfileRequest,
  getUserProfileSuccess,
  getUserProfileError,
  clearUserProfile,
  updateUserProfileRequest,
  updateUserProfileSuccess,
  updateUserProfileError,
  clearUserError,
  getHistoryRequest,
  getHistorySuccess,
  getHistoryError,
} from "../actions/actions";
import { UserProfileState } from "../@types";

const initialState: UserProfileState = {
  isLoading: false,
  errors: {
    results: null,
  },
  profile: null,
  history: null,
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(getUserProfileRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.profile = null;
    })
    .addCase(getUserProfileSuccess, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    })
    .addCase(getUserProfileError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(updateUserProfileRequest, (state, _action) => {
      state.isLoading = true;
    })
    .addCase(updateUserProfileSuccess, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    })
    .addCase(updateUserProfileError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(getHistoryRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.history = null;
    })
    .addCase(getHistorySuccess, (state, action) => {
      state.isLoading = false;
      state.history = action.payload;
    })
    .addCase(getHistoryError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(clearUserProfile, (state, _action) => {
      state.isLoading = false;
      state.profile = null;
      state.errors.results = null;
      state.history = null;
    })
    .addCase(clearUserError, (state, _action) => {
      state.errors.results = null;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export {
  initialState as UserProfileInitialState,
  reducer as UserProfileStateReducer,
};
