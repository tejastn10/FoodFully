import { createReducer } from "@reduxjs/toolkit";
import {
  donationRequest,
  donationSuccess,
  donationError,
  recentDonationRequest,
  recentDonationSuccess,
  recentDonationError,
  clearDonation,
} from "../actions/actions";
import { DonationState } from "../@types";

const initialState: DonationState = {
  isLoading: false,
  errors: {
    results: null,
  },
  donation: null,
  donations: null,
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(donationRequest, (state, _action) => {
      state.isLoading = true;
    })
    .addCase(donationSuccess, (state, action) => {
      state.isLoading = false;
      state.donation = action.payload;
    })
    .addCase(donationError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(recentDonationRequest, (state, _action) => {
      state.isLoading = true;
    })
    .addCase(recentDonationSuccess, (state, action) => {
      state.isLoading = false;
      state.donations = action.payload;
    })
    .addCase(recentDonationError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(clearDonation, (state, _action) => {
      state.isLoading = false;
      state.errors.results = null;
      state.donation = null;
      state.donations = null;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export {
  initialState as DonationInitialState,
  reducer as DonationStateReducer,
};
