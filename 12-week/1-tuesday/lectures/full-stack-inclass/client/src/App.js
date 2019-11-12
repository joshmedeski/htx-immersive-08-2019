import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Users />
        <Posts />
      </header>
    </div>
  );
}

export default App;
