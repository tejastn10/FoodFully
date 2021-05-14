import { Route, Switch } from "react-router-dom";

import Login from "../containers/auth/Login";
import Register from "../containers/auth/Register";
import About from "../components/About";
import Landing from "../containers/landing/Landing";
import Contact from "../components/Contact";
import NotFound from "../components/404NotFound";
import Profile from "../containers/auth/Profile";
import Admin from "../containers/admin/Admin";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/admin" component={Admin} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
