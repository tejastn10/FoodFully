import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import { orderRequest, orderSuccess, orderError } from "../actions/actions";

const makeOrder = function* (action: Action): any {
  try {
    if (orderRequest.match(action)) {
      const res = yield call(API.order, action.payload);
      const data = res.data;
      if (res.status !== 201) {
        yield put(orderError(data.error));
      } else {
        yield put(orderSuccess(data));
      }
    }
  } catch (error) {
    yield put(orderError(getCustomError(error.response.data)));
  }
};

const watchOrderRequest = function* () {
  yield takeLatest(orderRequest.type, makeOrder);
};

export default function* userSaga() {
  yield all([fork(watchOrderRequest)]);
}
