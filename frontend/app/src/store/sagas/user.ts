import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import {
  getUserProfileRequest,
  getUserProfileSuccess,
  getUserProfileError,
  updateUserProfileRequest,
  updateUserProfileSuccess,
  updateUserProfileError,
  getHistoryRequest,
  getHistorySuccess,
  getHistoryError,
} from "../actions/actions";

const getUserProfile = function* (action: Action): any {
  try {
    if (getUserProfileRequest.match(action)) {
      const res = yield call(API.fetchUserProfile, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(getUserProfileError(data.error));
      } else {
        yield put(getUserProfileSuccess(data));
      }
    }
  } catch (error) {
    yield put(getUserProfileError(getCustomError(error.response.data)));
  }
};

const updateUserProfile = function* (action: Action): any {
  try {
    if (updateUserProfileRequest.match(action)) {
      const res = yield call(API.updateUserProfile, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(updateUserProfileError(data.error));
      } else {
        yield put(updateUserProfileSuccess(data));
      }
    }
  } catch (error) {
    yield put(updateUserProfileError(getCustomError(error.response.data)));
  }
};

const getHistory = function* (action: Action): any {
  try {
    if (getHistoryRequest.match(action)) {
      const res = yield call(API.getUserHistory, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(getHistoryError(data.error));
      } else {
        yield put(getHistorySuccess(data));
      }
    }
  } catch (error) {
    yield put(getHistoryError(getCustomError(error.response.data)));
  }
};

const watchUserProfileRequest = function* () {
  yield takeLatest(getUserProfileRequest.type, getUserProfile);
};

const watchUpdateUserProfileRequest = function* () {
  yield takeLatest(updateUserProfileRequest.type, updateUserProfile);
};

const watchHistoryRequest = function* () {
  yield takeLatest(getHistoryRequest.type, getHistory);
};

export default function* userSaga() {
  yield all([
    fork(watchUserProfileRequest),
    fork(watchUpdateUserProfileRequest),
    fork(watchHistoryRequest),
  ]);
}
