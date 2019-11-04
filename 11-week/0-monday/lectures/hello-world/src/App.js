import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      // '<>' is the same thing as '<React.Fragment>'
      <>
        <Header />
        <Footer />
      </>
    );
  }
}

// The developer doesn't create the instance like this.
// const app = new App();
// console.log(app);

export default App;
