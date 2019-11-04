import React from "react";
import Greeter from "./Greeter";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Hello World</h1>
        <Greeter />
      </header>
    );
  }
}

export default Header;
