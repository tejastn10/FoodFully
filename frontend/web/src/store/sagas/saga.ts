import { all, fork } from "redux-saga/effects";
import authSaga from "./auth";

export const rootSaga = function* () {
  yield all([fork(authSaga)]);
};
