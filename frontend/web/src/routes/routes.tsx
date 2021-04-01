import { Route, Switch } from "react-router-dom";

import Login from "../components/Login";
import Signup from "../components/Signup";
import About from "../components/About";
import Ngo from "../components/Ngo";
import Landing from "../components/Landing";
import Contact from "../components/Contact";
import Hotel from "../components/Hotel";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/hotel" component={Hotel} />
        <Route exact path="/ngo" component={Ngo} />
      </Switch>
    </>
  );
};
