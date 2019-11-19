// Thanks to https://codesandbox.io/s/jvky9o0nvw
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// Plain empty context
const RoomContext = React.createContext();

// A component whose sole job is to manage
// the state of the Room
class RoomStore extends React.Component {
  state = {
    isLit: false
  };

  toggleLight = () => {
    this.setState(state => ({ isLit: !state.isLit }));
  };

  render() {
    // Pass down the state and the onToggleLight action
    return (
      <RoomContext.Provider
        value={{
          isLit: this.state.isLit,
          onToggleLight: this.toggleLight
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// Receive the state of the light, and the function to
// toggle the light, from RoomContext
const Room = () => (
  <RoomContext.Consumer>
    {({ isLit, onToggleLight }) => (
      <div className="app">
        <div className={`room ${isLit ? "lit" : "dark"}`}>
          The room is {isLit ? "lit" : "dark"}.
          <br />
          <button onClick={onToggleLight}>Flip</button>
        </div>
      </div>
    )}
  </RoomContext.Consumer>
);

// Wrap the whole app in the RoomStore
// this would work just as well inside `App`
ReactDOM.render(
  <RoomStore>
    <Room />
  </RoomStore>,
  document.querySelector("#root")
);
