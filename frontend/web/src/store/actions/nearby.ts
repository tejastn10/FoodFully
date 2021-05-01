import { createAction } from "@reduxjs/toolkit";
import { NearbyActionTypes } from "../@types";

export const nearbyHotelRequest = createAction(
  NearbyActionTypes.NEARBY_HOTEL_REQUEST
);
export const nearbyHotelSuccess = createAction(
  NearbyActionTypes.NEARBY_HOTEL_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const nearbyHotelError = createAction(
  NearbyActionTypes.NEARBY_HOTEL_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const nearbyNGORequest = createAction(
  NearbyActionTypes.NEARBY_NGO_REQUEST
);
export const nearbyNGOSuccess = createAction(
  NearbyActionTypes.NEARBY_NGO_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const nearbyNGOError = createAction(
  NearbyActionTypes.NEARBY_NGO_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const clearNearby = createAction(NearbyActionTypes.CLEAR_NEARBY);
