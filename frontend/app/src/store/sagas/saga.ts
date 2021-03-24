import { all, fork } from "redux-saga/effects";

import authSaga from "./auth";
import userSaga from "./user";

export const rootSaga = function* () {
  yield all([fork(authSaga), fork(userSaga)]);
};
