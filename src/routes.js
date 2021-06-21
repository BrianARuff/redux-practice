import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";

export default (
  <Router>
    <Switch>
      <Route component={App} path="/" />
    </Switch>
  </Router>
);
