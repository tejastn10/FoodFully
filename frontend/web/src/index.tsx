import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { ApplicationState, configureAppStore } from "./store/store";
import {
  AuthInitialState,
  NearbyInitialState,
  ProfileInitialState,
  DonationInitialState,
} from "./store/reducer/reducer";

const initialState: ApplicationState = {
  auth: AuthInitialState,
  nearby: NearbyInitialState,
  profile: ProfileInitialState,
  donation: DonationInitialState,
};
const store = configureAppStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
