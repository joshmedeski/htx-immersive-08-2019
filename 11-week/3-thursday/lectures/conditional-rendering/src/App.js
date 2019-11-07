import React from "react";
import logo from "./logo.svg";
import "./App.css";

var isLoggedIn = true;

function App(props) {
  var button;
  button;
  if (isLoggedIn) {
    button = <Logout name={props.name} />;
  } else {
    button = <Login name={props.name} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {button}
      </header>
    </div>
  );
}

function Login(props) {
  return <button>Log {props.name} In</button>;
}

function Logout(props) {
  return <button>Log {props.name} Out</button>;
}

export default App;
