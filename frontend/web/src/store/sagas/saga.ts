import { all, fork } from "redux-saga/effects";
import authSaga from "./auth";
import nearbySaga from "./nearby";

export const rootSaga = function* () {
  yield all([fork(authSaga), fork(nearbySaga)]);
};
