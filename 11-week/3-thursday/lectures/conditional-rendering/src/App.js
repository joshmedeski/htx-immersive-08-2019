import React from "react";
import logo from "./logo.svg";
import "./App.css";

var isLoggedIn = true;

function App(props) {
  var button;
  if (isLoggedIn) {
    button = <Logout />;
  } else {
    button = <Login />;
  }

  return (
    <div className="App">
      {false ? <GreeterMessage name={null} /> : null}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {button}
        {isLoggedIn ? <Logout /> : <Login />}
      </header>
    </div>
  );
}

function GreeterMessage(props) {
  // Conditional Guard
  if (!props.name) return null;

  return <h1>Hello, {props.name}</h1>;
}

function Login() {
  return <button>Log In</button>;
}

function Logout() {
  return <button>Log Out</button>;
}

export default App;
