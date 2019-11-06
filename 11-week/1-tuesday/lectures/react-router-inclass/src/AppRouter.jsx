import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Page from "./pages/Page";
import BookPage from "./pages/Book";

export default function AppRouter() {
  return (
    <Router>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/latest">Latest</Link>
        </li>
        <li className="menu-item">
          <Link to="/books/123019">Book 123019</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Page name="Home" />
        </Route>
        <Route exact path="/latest">
          <Page name="Latest Books" />
        </Route>
        <Route exact path="/books/:id">
          <BookPage />
        </Route>

        <Route>
          <Page name="Not Found" />
        </Route>
      </Switch>
    </Router>
  );
}
