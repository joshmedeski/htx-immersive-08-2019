import React from "react";
import { Provider } from "react-redux";
import { store as appStore } from "./redux/store";
import Count from "./components/counter/Count";
import IncrementButton from "./components/counter/IncrementButton";
import TodoList from "./components/todos/TodoList";
import AddTodoForm from "./components/todos/AddTodoForm";

function App() {
  return (
    <Provider store={appStore}>
      <h1>Combine Reducers Exercise</h1>
      <Count />
      <IncrementButton />
      <hr />
      <h2>Todo List</h2>
      <TodoList />
      <AddTodoForm />
    </Provider>
  );
}

export default App;
