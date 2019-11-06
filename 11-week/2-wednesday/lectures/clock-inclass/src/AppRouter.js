import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Clock from "./components/Clock";

export default function AppRouter() {
  return (
    <Router>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/">Clock</Link>
        </li>
        <li className="menu-item">
          <Link to="/clock-2">Clock 2</Link>
        </li>
        <li className="menu-item">
          <Link to="/alarm">Alarm</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Clock number={1} />
          <Clock number="second" />
        </Route>
        <Route exact path="/clock-2">
          <Clock number={2} />
        </Route>
        <Route exact path="/alarm">
          <h1>Alarm Page</h1>
        </Route>
      </Switch>
    </Router>
  );
}
