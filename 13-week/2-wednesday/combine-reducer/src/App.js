import React from "react";
import { Provider } from "react-redux";
import { store as appStore } from "./redux/store";

function App() {
  return (
    <Provider store={appStore}>
      <h1>Combine Reducers Exercise</h1>
    </Provider>
  );
}

export default App;
