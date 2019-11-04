import React from "react";

class Greeter extends React.Component {
  constructor(values) {
    super(values);
    this.state = { message: "Hello there", messageClass: "message" };
  }

  render() {
    let greetingMsg = this.state.message;
    if (this.props.name) {
      greetingMsg += `, ${this.props.name}`;
    }
    return <span className={this.state.messageClass}>{greetingMsg}</span>;
  }
}

export default Greeter;
