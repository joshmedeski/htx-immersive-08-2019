import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date(), people: 21 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    return (
      <>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
        <h2>Number of People: {this.state.people}</h2>
      </>
    );
  }
}
