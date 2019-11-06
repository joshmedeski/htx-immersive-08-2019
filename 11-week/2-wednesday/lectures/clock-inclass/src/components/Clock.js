import React, { Component } from "react";

export default class Clock extends Component {
  render() {
    const now = new Date();
    return <h1>{now.toLocaleTimeString()}</h1>;
  }
}
