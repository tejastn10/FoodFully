import { Route, Switch } from "react-router-dom";

import Login from "../containers/auth/Login";
import Register from "../containers/auth/Register";
import About from "../components/About";
import Landing from "../containers/landing/Landing";
import Contact from "../components/Contact";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
};
