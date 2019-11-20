import { createStore } from "redux";
import { combinedReducer } from "./reducers/combined-reducer";

export const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
