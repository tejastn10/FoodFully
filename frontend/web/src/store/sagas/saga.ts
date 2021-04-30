import { all, fork } from "redux-saga/effects";
import authSaga from "./auth";
import nearbySaga from "./nearby";
import profileSaga from "./profile";

export const rootSaga = function* () {
  yield all([fork(authSaga), fork(nearbySaga), fork(profileSaga)]);
};
