import React from "react";
import Greeter from "./Greeter";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Hello World</h1>
        <Greeter name={this.props.greeterName} isFeatureOn={true} />
        <br />
        <Greeter />
      </header>
    );
  }
}

export default Header;
