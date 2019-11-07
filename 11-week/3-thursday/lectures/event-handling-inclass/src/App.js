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

  handleClick(id, name) {
    this.setState({ isActivate: true });
    alert(`activate laser ${id}, congrats ${name}`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleClick}>Activate Lasers</button>
          <button onClick={e => this.handleClick("1", "josh", e)}>
            Activate Laser 1
          </button>
          <button onClick={this.handleClick.bind(this, "2", "josh")}>
            Activate Lasers 2
          </button>
          <button onClick={this.handleClick.bind(this, "4", "scott")}>
            Activate Lasers 4
          </button>
          <p>
            Are the lasers activated? {this.state.isActivate ? "true" : "false"}
          </p>
        </header>
      </div>
    );
  }
}
