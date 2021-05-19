import { createReducer } from "@reduxjs/toolkit";
import {
  orderRequest,
  orderSuccess,
  orderError,
  clearOrder,
} from "../actions/actions";
import { OrderState } from "../@types";

const initialState: OrderState = {
  isLoading: false,
  errors: {
    results: null,
  },
  order: null,
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(orderRequest, (state, _action) => {
      state.isLoading = true;
    })
    .addCase(orderSuccess, (state, action) => {
      state.isLoading = false;
      state.order = action.payload;
    })
    .addCase(orderError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(clearOrder, (state, _action) => {
      state.isLoading = false;
      state.errors.results = null;
      state.order = null;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export { initialState as OrderInitialState, reducer as OrderStateReducer };
