import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import {
  donationRequest,
  donationSuccess,
  donationError,
  recentDonationRequest,
  recentDonationSuccess,
  recentDonationError,
} from "../actions/actions";

const sendDonation = function* (action: Action): any {
  try {
    if (donationRequest.match(action)) {
      const res = yield call(API.donate, action.payload);
      const data = res.data;
      if (res.status !== 201) {
        yield put(donationError(data.error));
      } else {
        yield put(donationSuccess(data));
      }
    }
  } catch (error) {
    yield put(donationError(getCustomError(error.response.data)));
  }
};

const getRecentDonation = function* (action: Action): any {
  try {
    if (recentDonationRequest.match(action)) {
      const res = yield call(API.getRecentDonations, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(recentDonationError(data.error));
      } else {
        yield put(recentDonationSuccess(data));
      }
    }
  } catch (error) {
    yield put(recentDonationError(getCustomError(error.response.data)));
  }
};

const watchDonationRequest = function* () {
  yield takeLatest(donationRequest.type, sendDonation);
};

const watchRecentDonationRequest = function* () {
  yield takeLatest(recentDonationRequest.type, getRecentDonation);
};

export default function* userSaga() {
  yield all([fork(watchDonationRequest), fork(watchRecentDonationRequest)]);
}
