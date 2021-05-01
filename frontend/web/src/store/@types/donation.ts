import { Errors } from ".";

export interface Donation {
  _id: string;
  donatedOn: string;
  isUrgent: boolean;
  quantity: string;
  description: string;
  bestBefore: string;
}

export interface DonationState {
  isLoading: boolean;
  errors: Errors;
  donation: Donation | null;
}

export enum DonationActionTypes {
  DONATION_REQUEST = "@@donation/DONATION_REQUEST",
  DONATION_SUCCESS = "@@donation/DONATION_SUCCESS",
  DONATION_ERROR = "@@donation/DONATION_ERROR",
  CLEAR_DONATION = "@@auth/CLEAR_DONATION",
}
