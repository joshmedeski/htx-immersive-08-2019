import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      // '<>' is the same thing as '<React.Fragment>'
      <>
        <header className="header">Header</header>
        <h1 className="greeting">Hello</h1>
        <footer className="footer">Footer</footer>
      </>
    );
  }
}

// The developer doesn't create the instance like this.
// const app = new App();
// console.log(app);

export default App;
