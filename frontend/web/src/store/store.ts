import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createInjectorsEnhancer } from "redux-injectors";

import { rootReducer } from "./reducer/reducer";
import { rootSaga } from "./sagas/saga";
import { AuthState, DonationState, NearbyState, ProfileState } from "./@types";

export type ApplicationState = {
  auth: AuthState;
  nearby: NearbyState;
  profile: ProfileState;
  donation: DonationState;
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
