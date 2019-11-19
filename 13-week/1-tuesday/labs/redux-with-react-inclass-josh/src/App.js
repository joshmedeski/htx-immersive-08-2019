import React from "react";
import { Provider } from "react-redux";
import { store as appStore } from "./redux/store";
import CounterDisplay from "./components/CounterDisplay";

function App() {
  return (
    <Provider store={appStore}>
      <h1>Redux with React</h1>
      <p>Simple counter exercise</p>
      <CounterDisplay />
    </Provider>
  );
}

export default App;
