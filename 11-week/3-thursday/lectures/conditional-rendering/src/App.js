import React from "react";
import logo from "./logo.svg";
import "./App.css";

var isLoggedIn = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserStatusButton name="Josh" />
        {/* <p>{isLoggedIn ? "Logout" : "Login"}</p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function UserStatusButton(props) {
  if (isLoggedIn) {
    return <Logout name={props.name} />;
  } else {
    return <Login name={props.name} />;
  }
}

function Login(props) {
  return <button>Log {props.name} In</button>;
}

function Logout(props) {
  return <button>Log {props.name} Out</button>;
}

export default App;
