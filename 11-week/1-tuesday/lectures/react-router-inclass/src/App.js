import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import AppRouter from "./AppRouter";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <AppRouter />
    </>
  );
}

// app.get('/books', () => {
//   app.render('template', data)
// })

export default App;
