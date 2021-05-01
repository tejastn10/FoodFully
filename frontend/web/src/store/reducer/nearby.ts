import { createReducer } from "@reduxjs/toolkit";
import {
  nearbyHotelRequest,
  nearbyHotelSuccess,
  nearbyHotelError,
  nearbyNGORequest,
  nearbyNGOSuccess,
  nearbyNGOError,
  clearNearby,
} from "../actions/actions";
import { NearbyState } from "../@types";

const initialState: NearbyState = {
  isLoading: false,
  errors: {
    results: null,
  },
  nearbyUsers: null,
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(nearbyHotelRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.nearbyUsers = null;
    })
    .addCase(nearbyHotelSuccess, (state, action) => {
      state.isLoading = false;
      state.nearbyUsers = action.payload;
    })
    .addCase(nearbyHotelError, (state, action) => {
      state.isLoading = false;
      state.nearbyUsers = action.payload;
    })
    .addCase(nearbyNGORequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.nearbyUsers = null;
    })
    .addCase(nearbyNGOSuccess, (state, action) => {
      state.isLoading = false;
      state.nearbyUsers = action.payload;
    })
    .addCase(nearbyNGOError, (state, action) => {
      state.isLoading = false;
      state.nearbyUsers = action.payload;
    })
    .addCase(clearNearby, (state, _action) => {
      state.isLoading = false;
      state.errors.results = null;
      state.nearbyUsers = null;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export { initialState as NearbyInitialState, reducer as NearbyStateReducer };
