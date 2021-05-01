import { createAction } from "@reduxjs/toolkit";
import { OrderActionTypes } from "../@types";

export const orderRequest = createAction(
  OrderActionTypes.ORDER_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const orderSuccess = createAction(
  OrderActionTypes.ORDER_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const orderError = createAction(
  OrderActionTypes.ORDER_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const clearOrder = createAction(OrderActionTypes.CLEAR_ORDER);
