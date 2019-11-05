import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Page from "./pages/Page";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Page name="Home" />
        </Route>
        <Route exact path="/latest">
          <Page name="Latest Books" />
        </Route>
        <Route>
          <Page name="Not Found" />
        </Route>
      </Switch>
    </Router>
  );
}
