import { createAction } from "@reduxjs/toolkit";
import { AdminActionTypes } from "../@types";

export const getUserListRequest = createAction(
  AdminActionTypes.USER_LIST_REQUEST
);
export const getUserListSuccess = createAction(
  AdminActionTypes.USER_LIST_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const getUserListError = createAction(
  AdminActionTypes.USER_LIST_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const userDeleteRequest = createAction(
  AdminActionTypes.USER_DELETE_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const userDeleteSuccess = createAction(
  AdminActionTypes.USER_DELETE_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const userDeleteError = createAction(
  AdminActionTypes.USER_DELETE_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const updatePrivilegeRequest = createAction(
  AdminActionTypes.UPDATE_PRIVILEGE_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updatePrivilegeSuccess = createAction(
  AdminActionTypes.UPDATE_PRIVILEGE_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updatePrivilegeError = createAction(
  AdminActionTypes.UPDATE_PRIVILEGE_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const getOrderListRequest = createAction(
  AdminActionTypes.ORDER_LIST_REQUEST
);
export const getOrderListSuccess = createAction(
  AdminActionTypes.ORDER_LIST_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const getOrderListError = createAction(
  AdminActionTypes.ORDER_LIST_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updateOrderRequest = createAction(
  AdminActionTypes.UPDATE_ORDER_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updateOrderSuccess = createAction(
  AdminActionTypes.UPDATE_ORDER_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updateOrderError = createAction(
  AdminActionTypes.UPDATE_ORDER_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const getDonationListRequest = createAction(
  AdminActionTypes.DONATION_LIST_REQUEST
);
export const getDonationListSuccess = createAction(
  AdminActionTypes.DONATION_LIST_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const getDonationListError = createAction(
  AdminActionTypes.DONATION_LIST_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const clearAdminState = createAction(AdminActionTypes.CLEAR_ADMIN_STATE);
export const clearAdminError = createAction(AdminActionTypes.CLEAR_ADMIN_ERROR);
