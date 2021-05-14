import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

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
} from "../actions/actions";

const getUsers = function* (action: Action): any {
  try {
    if (getUserListRequest.match(action)) {
      const res = yield call(API.getUsers, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(getUserListError(data.error));
      } else {
        yield put(getUserListSuccess(data));
      }
    }
  } catch (error) {
    yield put(getUserListError(getCustomError(error.response.data)));
  }
};

const updateUserPrivilege = function* (action: Action): any {
  try {
    if (updatePrivilegeRequest.match(action)) {
      const res = yield call(API.updateUserPrivilege, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(updatePrivilegeError(data.error));
      } else {
        yield put(updatePrivilegeSuccess(data));
      }
    }
  } catch (error) {
    yield put(updatePrivilegeError(getCustomError(error.response.data)));
  }
};

const deleteUser = function* (action: Action): any {
  try {
    if (userDeleteRequest.match(action)) {
      const res = yield call(API.deleteUser, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(userDeleteError(data.error));
      } else {
        yield put(userDeleteSuccess(data));
      }
    }
  } catch (error) {
    yield put(userDeleteError(getCustomError(error.response.data)));
  }
};

const getOrders = function* (action: Action): any {
  try {
    if (getOrderListRequest.match(action)) {
      const res = yield call(API.getOrders, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(getOrderListError(data.error));
      } else {
        yield put(getOrderListSuccess(data));
      }
    }
  } catch (error) {
    yield put(getOrderListError(getCustomError(error.response.data)));
  }
};

const updateOrder = function* (action: Action): any {
  try {
    if (updateOrderRequest.match(action)) {
      const res = yield call(API.updateOrder, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(updateOrderError(data.error));
      } else {
        yield put(updateOrderSuccess(data));
      }
    }
  } catch (error) {
    yield put(updateOrderError(getCustomError(error.response.data)));
  }
};

const getDonations = function* (action: Action): any {
  try {
    if (getDonationListRequest.match(action)) {
      const res = yield call(API.getDonations, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(getDonationListError(data.error));
      } else {
        yield put(getDonationListSuccess(data));
      }
    }
  } catch (error) {
    yield put(getDonationListError(getCustomError(error.response.data)));
  }
};

const watchUsersRequest = function* () {
  yield takeLatest(getUserListRequest.type, getUsers);
};

const watchUpdateUserRequest = function* () {
  yield takeLatest(updatePrivilegeRequest.type, updateUserPrivilege);
};

const watchDeleteUserRequest = function* () {
  yield takeLatest(userDeleteRequest.type, deleteUser);
};

const watchOrdersRequest = function* () {
  yield takeLatest(getOrderListRequest.type, getOrders);
};

const watchUpdateOrderRequest = function* () {
  yield takeLatest(updateOrderRequest.type, updateOrder);
};

const watchDonationsRequest = function* () {
  yield takeLatest(getDonationListRequest.type, getDonations);
};

export default function* adminSaga() {
  yield all([
    fork(watchUsersRequest),
    fork(watchUpdateUserRequest),
    fork(watchDeleteUserRequest),
    fork(watchOrdersRequest),
    fork(watchUpdateOrderRequest),
    fork(watchDonationsRequest),
  ]);
}
