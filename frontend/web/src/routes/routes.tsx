import { Route, Switch } from "react-router-dom";

import Login from "../containers/auth/Login";
import Signup from "../containers/auth/Signup";
import About from "../components/About";
import Ngo from "../containers/landing/Ngo";
import Landing from "../containers/landing/Landing";
import Contact from "../components/Contact";
import Hotel from "../containers/landing/Hotel";
import { AuthState } from "../store/@types";
import { ApplicationState } from "../store/store";
import { useSelector } from "react-redux";

export const Routes = () => {
  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.auth
  );

  return (
    <Switch>
      <Route
        exact
        path="/"
        component={
          authState.auth ? (authState.auth?.isNgo ? Ngo : Hotel) : Landing
        }
      />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
};
