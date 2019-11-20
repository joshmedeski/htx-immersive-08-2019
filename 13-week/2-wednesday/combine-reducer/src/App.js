import React from "react";
import { Provider } from "react-redux";
import { store as appStore } from "./redux/store";
import Count from "./components/Count";
import IncrementButton from "./components/IncrementButton";

function App() {
  return (
    <Provider store={appStore}>
      <h1>Combine Reducers Exercise</h1>
      <Count />
      <IncrementButton />
    </Provider>
  );
}

export default App;
