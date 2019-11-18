import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Count from "./components/Count";
import IncrementButton from "./components/IncrementButton";

function App() {
  return (
    <Provider store={store}>
      <h1>Redux with React Exercise - Counter</h1>
      <Count />
      <IncrementButton />
    </Provider>
  );
}

export default App;
