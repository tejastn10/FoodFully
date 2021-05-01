import { createAction } from "@reduxjs/toolkit";
import { ProfileActionTypes } from "../@types";

export const getProfileRequest = createAction(
  ProfileActionTypes.PROFILE_REQUEST
);
export const getProfileSuccess = createAction(
  ProfileActionTypes.PROFILE_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const getProfileError = createAction(
  ProfileActionTypes.PROFILE_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const clearProfile = createAction(ProfileActionTypes.CLEAR_PROFILE);

export const updateProfileRequest = createAction(
  ProfileActionTypes.UPDATE_PROFILE_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updateProfileSuccess = createAction(
  ProfileActionTypes.UPDATE_PROFILE_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updateProfileError = createAction(
  ProfileActionTypes.UPDATE_PROFILE_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
