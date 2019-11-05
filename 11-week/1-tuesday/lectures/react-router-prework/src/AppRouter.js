import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import BookPage from "./pages/BookPage";
import PageNotFound from "./pages/PageNotFound";
import Menu from "./Menu";

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/books">
          <BooksPage />
        </Route>
        <Route exact path="/books/:id">
          <BookPage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}
