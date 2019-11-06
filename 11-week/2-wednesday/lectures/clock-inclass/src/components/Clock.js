import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date(), people: 21 };
  }

  componentDidMount() {
    this.clockInterval = setInterval(() => {
      console.log(`Clock ${this.props.number}'s Interval`);
      this.setState({ time: new Date() });

      // If you need something from state or props when setting state,
      // use the anonymous function instead.
      //
      // this.setState((state, props) => {
      //   return {
      //     time: new Date(),
      //     people: (state.people += 1)
      //   };
      // });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
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
