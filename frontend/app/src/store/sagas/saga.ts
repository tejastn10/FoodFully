import { all, fork } from "redux-saga/effects";

import authSaga from "./auth";
import userSaga from "./user";
import nearbySaga from "./nearby";
import donationSaga from "./donation";

export const rootSaga = function* () {
  yield all([
    fork(authSaga),
    fork(userSaga),
    fork(nearbySaga),
    fork(donationSaga),
  ]);
};
