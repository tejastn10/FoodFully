import { createAction } from "@reduxjs/toolkit";
import { DonationActionTypes } from "../@types";

export const donationRequest = createAction(
  DonationActionTypes.DONATION_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const donationSuccess = createAction(
  DonationActionTypes.DONATION_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const donationError = createAction(
  DonationActionTypes.DONATION_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const recentDonationRequest = createAction(
  DonationActionTypes.RECENT_DONATION_REQUEST
);
export const recentDonationSuccess = createAction(
  DonationActionTypes.RECENT_DONATION_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const recentDonationError = createAction(
  DonationActionTypes.RECENT_DONATION_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const clearDonation = createAction(DonationActionTypes.CLEAR_DONATION);
