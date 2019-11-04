import React from "react";

class Greeter extends React.Component {
  message = "Hello there, friend";
  messageClass = "message";
  render() {
    // JSX
    return <span className={this.messageClass}>{this.message}</span>;
  }
}

export default Greeter;
