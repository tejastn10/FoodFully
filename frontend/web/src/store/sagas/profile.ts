import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import {
  getProfileRequest,
  getProfileSuccess,
  getProfileError,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileError,
  getHistoryRequest,
  getHistorySuccess,
  getHistoryError,
} from "../actions/actions";

const getUserProfile = function* (action: Action): any {
  try {
    if (getProfileRequest.match(action)) {
      const res = yield call(API.fetchUserProfile, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(getProfileError(data.error));
      } else {
        yield put(getProfileSuccess(data));
      }
    }
  } catch (error) {
    yield put(getProfileError(getCustomError(error.response.data)));
  }
};

const updateUserProfile = function* (action: Action): any {
  try {
    if (updateProfileRequest.match(action)) {
      const res = yield call(API.updateUserProfile, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(updateProfileError(data.error));
      } else {
        yield put(updateProfileSuccess(data));
      }
    }
  } catch (error) {
    yield put(updateProfileError(getCustomError(error.response.data)));
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
  yield takeLatest(getProfileRequest.type, getUserProfile);
};

const watchUpdateUserProfileRequest = function* () {
  yield takeLatest(updateProfileRequest.type, updateUserProfile);
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
