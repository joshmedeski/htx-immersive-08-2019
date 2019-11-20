import { combineReducers } from "redux";
import { counterReducer } from "./counter-reducer";
import { todoReducer } from "./todo-reducer";

export const combinedReducer = combineReducers({
  todos: todoReducer,
  counter: counterReducer
});
