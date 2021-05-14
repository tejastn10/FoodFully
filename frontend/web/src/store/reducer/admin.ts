import { createReducer } from "@reduxjs/toolkit";
import {
  getUserListRequest,
  getUserListSuccess,
  getUserListError,
  userDeleteRequest,
  userDeleteSuccess,
  userDeleteError,
  updatePrivilegeRequest,
  updatePrivilegeSuccess,
  updatePrivilegeError,
  getOrderListRequest,
  getOrderListSuccess,
  getOrderListError,
  updateOrderRequest,
  updateOrderSuccess,
  updateOrderError,
  getDonationListRequest,
  getDonationListSuccess,
  getDonationListError,
  clearAdminState,
  clearAdminError,
} from "../actions/actions";
import { AdminState } from "../@types";

const initialState: AdminState = {
  isLoading: false,
  errors: {
    results: null,
  },
  messages: {
    message: null,
  },
  users: null,
  orders: null,
  donations: null,
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(getUserListRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.users = null;
    })
    .addCase(getUserListSuccess, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    })
    .addCase(getUserListError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(userDeleteRequest, (state, _action) => {
      state.isLoading = true;
      state.messages.message = null;
    })
    .addCase(userDeleteSuccess, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload;
    })
    .addCase(userDeleteError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(updatePrivilegeRequest, (state, _action) => {
      state.isLoading = true;
      state.messages.message = null;
    })
    .addCase(updatePrivilegeSuccess, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload;
    })
    .addCase(updatePrivilegeError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(clearAdminState, (state, _action) => {
      state.isLoading = false;
      state.errors.results = null;
      state.messages.message = null;
      state.users = null;
    })
    .addCase(getOrderListRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.orders = null;
    })
    .addCase(getOrderListSuccess, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    })
    .addCase(getOrderListError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(updateOrderRequest, (state, _action) => {
      state.isLoading = true;
      state.messages.message = null;
    })
    .addCase(updateOrderSuccess, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload;
    })
    .addCase(updateOrderError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(getDonationListRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.donations = null;
    })
    .addCase(getDonationListSuccess, (state, action) => {
      state.isLoading = false;
      state.donations = action.payload;
    })
    .addCase(getDonationListError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(clearAdminError, (state, _action) => {
      state.errors.results = null;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export { initialState as AdminInitialState, reducer as AdminStateReducer };
