import { createReducer } from "@reduxjs/toolkit";
import {
  getProfileRequest,
  getProfileSuccess,
  getProfileError,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileError,
  clearProfile,
  getHistoryRequest,
  getHistorySuccess,
  getHistoryError,
} from "../actions/actions";
import { ProfileState } from "../@types";

const initialState: ProfileState = {
  isLoading: false,
  errors: {
    results: null,
  },
  profile: null,
  history: null,
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(getProfileRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.profile = null;
    })
    .addCase(getProfileSuccess, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    })
    .addCase(getProfileError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(updateProfileRequest, (state, _action) => {
      state.isLoading = true;
    })
    .addCase(updateProfileSuccess, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    })
    .addCase(updateProfileError, (state, action) => {
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
    .addCase(clearProfile, (state, _action) => {
      state.isLoading = false;
      state.errors.results = null;
      state.profile = null;
      state.history = null;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export { initialState as ProfileInitialState, reducer as ProfileStateReducer };
