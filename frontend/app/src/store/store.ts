import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createInjectorsEnhancer } from "redux-injectors";

import { rootReducer } from "./reducers/reducer";
import { rootSaga } from "./sagas/saga";
import {
  AuthState,
  UserProfileState,
  NearbyState,
  DonationState,
  OrderState,
} from "./@types";

export type ApplicationState = {
  authState: AuthState;
  userProfile: UserProfileState;
  nearby: NearbyState;
  donation: DonationState;
  order: OrderState;
};

export const configureAppStore = (initialState: ApplicationState) => {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const { run: runSaga } = sagaMiddleware;

  const middleware = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer: rootReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: rootReducer(),
    middleware: [...getDefaultMiddleware(), ...middleware],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== "production",
    enhancers,
  });

  sagaMiddleware.run(rootSaga);
  return store;
};
