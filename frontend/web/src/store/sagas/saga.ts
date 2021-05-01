import { all, fork } from "redux-saga/effects";
import authSaga from "./auth";
import nearbySaga from "./nearby";
import profileSaga from "./profile";
import donationSaga from "./donation";
import orderSaga from "./order";

export const rootSaga = function* () {
  yield all([
    fork(authSaga),
    fork(nearbySaga),
    fork(profileSaga),
    fork(donationSaga),
    fork(orderSaga),
  ]);
};
