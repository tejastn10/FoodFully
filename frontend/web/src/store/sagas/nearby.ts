import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import {
  nearbyHotelRequest,
  nearbyHotelSuccess,
  nearbyHotelError,
  nearbyNGORequest,
  nearbyNGOSuccess,
  nearbyNGOError,
} from "../actions/actions";

const getHotels = function* (action: Action): any {
  try {
    if (nearbyHotelRequest.match(action)) {
      const res = yield call(API.getHotels, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(nearbyHotelError(data.error));
      } else {
        yield put(nearbyHotelSuccess(data));
      }
    }
  } catch (error) {
    yield put(nearbyHotelError(getCustomError(error.response.data)));
  }
};

const getNGOs = function* (action: Action): any {
  try {
    if (nearbyNGORequest.match(action)) {
      const res = yield call(API.getNGOs, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(nearbyNGOError(data.error));
      } else {
        yield put(nearbyNGOSuccess(data));
      }
    }
  } catch (error) {
    yield put(nearbyNGOError(getCustomError(error.response.data)));
  }
};

const watchHotelRequest = function* () {
  yield takeLatest(nearbyHotelRequest.type, getHotels);
};

const watchNGORequest = function* () {
  yield takeLatest(nearbyNGORequest.type, getNGOs);
};

export default function* authSaga() {
  yield all([fork(watchHotelRequest), fork(watchNGORequest)]);
}
