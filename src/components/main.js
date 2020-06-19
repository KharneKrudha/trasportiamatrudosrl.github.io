import React from "react";
import { Switch, Route } from "react-router";

import LandingPage from "./landingpage";
import About from "./about";
import Contact from "./contact";
import Maps from "./map";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/landingpage" component={LandingPage} />
    <Route exact path="/about" component={About} />
    <Route exact path="/map" component={Maps} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Main;
