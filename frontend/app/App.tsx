import React from "react";
import { StatusBar } from "react-native";

import { Provider } from "react-redux";
import { ApplicationState, configureAppStore } from "./src/store/store";

import {
  AuthInitialState,
  UserProfileInitialState,
} from "./src/store/reducers/reducer";

import Navigator from "./src/router/Navigator";
import useColorScheme from "./src/hooks/useColorScheme";

const initialState: ApplicationState = {
  authState: AuthInitialState,
  userProfile: UserProfileInitialState,
};
const store = configureAppStore(initialState);

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
      <Navigator colorScheme={colorScheme} />
      <StatusBar />
    </Provider>
  );
};

export default App;
