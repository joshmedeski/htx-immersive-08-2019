import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isActivate: false };
    // binding App's "this" to handleClick's "this"
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isActivate: true });
    alert("activate lasers");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleClick}>Activate Lasers</button>
          {/* <button onClick={e => this.handleClick(e)}>
            Activate Lasers Another Way
          </button> */}
          <p>
            Are the lasers activated? {this.state.isActivate ? "true" : "false"}
          </p>
        </header>
      </div>
    );
  }
}
