import React from "react";

class Greeter extends React.Component {
  message = "Hello there, friend";
  render() {
    // JSX
    return <span>{this.message}</span>;
  }
}

export default Greeter;
